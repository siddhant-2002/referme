import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase';

const Upload = () => {

  const [pdf, setPdf] = useState(undefined);
  
  const [pdfPerc, setPdfPerc] = useState(0);
  
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    pdf && uploadFile(pdf, "pdfUrl");
  }, [pdf]);

  const uploadFile = (file, fileType) => {
    const storage = getStorage(app);
    const folder = "Pdf/";
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if(fileType === "pdfUrl"){
          setPdfPerc(Math.round(progress));
        }

      },
      (error) => {
        console.log(error);
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            console.log(error);
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log('DownloadURL - ', downloadURL);
          setInputs((prev) => {
            return {
              ...prev,
              [fileType]: downloadURL,
            };
          });
        });
      }
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/pdfs`, { ...inputs });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-off-white">
      <form onSubmit={handleSubmit} className="w-1/2 bg-white rounded-lg shadow-2xl p-6 m-4">
        <div className="mb-4">
          <label htmlFor="pdf" className="block text-gray-700 text-2xl font-bold mb-2 ">Pdf:</label>
          {pdfPerc > 0 && <p className="text-gray-700 text-sm mb-2">Uploading: {pdfPerc}%</p>}
          <input
            type="file"
            accept="Pdf/*"
            id="pdf"
            onChange={(e) => setPdf((prev) => e.target.files[0])}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
          Upload
        </button>
      </form>
    </div>
  );
}

export default Upload;