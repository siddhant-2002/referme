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
        if (fileType === "pdfUrl") {
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
    console.log(notes);
    e.preventDefault();
    console.log(notes);
    try {
      await axios.post(`http://localhost:5000/api/pdfs`, {
        ...inputs,
        ...notes


      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };


  const subjects = {
    "First Year": {
      "semester 1": ["M 1", "BEE", "BXE"],
      "semester 2": ["PHY", "CHEM", "EME"]
    },
    // Add other years and semesters here
  };
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [subtype, setSubtype] = useState("");
  const [notes, setNotes] = useState({
    year: "",
    semester: "",
    subject: "",
    type: "",
    subtype: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNotes(prevNotes => ({
      ...prevNotes,
      [name]: value
    }));

    if (name === "year") {
      setYear(value);
      setSemester(""); // Reset semester when year changes
    } else if (name === "semester") {
      setSemester(value);

    }
    else if (name === "type") {
      setType(value);
    }

    else if (name === "subject") {
      setSubject(value);
    }

    else if (name === "subtype") {
      setSubtype(value);
    }
  };

  const filteredSubjects = year && semester ? subjects[year][semester] : [];
  return (
    <div>
      <div>
        <div className='flex gap-4 my-10 justify-center px-10'>
          <select onChange={handleChange} name="year" value={year} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden> Year </option>
            <option value="First Year">First Year</option>
            <option value="Second Year">Second Year</option>
            <option value="Third Year">Third Year</option>
            <option value="Forth Year">Forth Year</option>
          </select>
          <select onChange={handleChange} name="semester" value={semester} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>semester</option>
            <option value="semester 1">semester 1</option>
            <option value="semester 2">semester 2</option>

          </select>
          <select onChange={handleChange} name="subject" value={subject} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Subjects</option>
            {filteredSubjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
          <select onChange={handleChange} name="type" value={type} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>What Do You Want...?</option>
            <option value="Notes">Notes</option>
            <option value="Practicals">Practicals</option>
            <option value="PYQ'S">PYQ'S</option>
          </select>

          {notes.type === "Notes" && (
            <select onChange={handleChange} name="subtype" value={subtype} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
              <option value="Unit 1">Unit 1</option>
              <option value="Unit 2">Unit 2</option>
              <option value="Unit 3">Unit 3</option>
              <option value="Unit 4">Unit 4</option>
              <option value="Unit 5">Unit 5</option>
              <option value="Unit 6">Unit 6</option>
            </select>
          )}
          {notes.type === "Practicals" && (
            <select onChange={handleChange} name="subtype" value={subtype} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
              <option value="Practical 1">Practical 1</option>
              <option value="Practical 2">Practical 2</option>
              <option value="Practical 3">Practical 3</option>
              <option value="Practical 4">Practical 4</option>
              <option value="Practical 5">Practical 5</option>
              <option value="Practical 6">Practical 6</option>
            </select>
          )}
          {notes.type === "PYQ'S" && (
            <select onChange={handleChange} name="subtype" value={subtype} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
              <option value="2018">2018</option>
              <option value="2019">2019</option>

            </select>
          )}

          <button className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
        </div>
      </div>
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
    </div>

  );
}

export default Upload;