import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        // console.log(error);
        toast.error("An error occurred");
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            // console.log(error);
            toast.error("An error occurred");
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
    // console.log(notes);
    e.preventDefault();
    if (!pdf) {
      toast.error("Please select a PDF");
      return;
    }
    if(!notes){
      toast.error("Please Enter specifications");
      return;
    }
    try {

      await axios.post(`https://referme.onrender.com/api/pdfs`, {
        ...inputs,
        ...notes,

      });
      toast.success("Pdf uploaded successfully");
      // window.location.reload();
    } catch (error) {
      // console.log(error);
      toast.error("An error occurred");
    }
  };


  const subjects = {
    "First Year": {
      "FE": {
        "semester 1": ["", "M 1", "BEE", "PHY", "SME", "PPS"],
        "semester 2": ["", "M 2", "BXE", "CHE", "EG", "EM"]
      }
    },
    // Add other years and semesters here

    "Second Year": {
      "computer": {
        "semester 1": ["", "DM", "FDS", "OOP", "CG", "DELD"],
        "semester 2": ["", "M 3", "DSA", "SE", "MP", "PPL"]
      },
      "IT": {
        "semester 1": ["", "DM", "LDCO", "DSA", "OOP", "BCN"],
        "semester 2": ["", "M3", "PA", "DBMS", "CG", "SE"],
      },
    },

    "Third Year": {
      "computer": {
        "semester 1": ["", "DBMS", "TOC", "SPOS", "CNS"],
        "semester 2": ["", "DSBDA", "WT", "AI", "CC"]
      },

      "IT": {
        "semester 1": ["", "TOC", "OS", "ML", "HCI"],
        "semester 2": ["", "CNS", "DSBDA", "WAD", "CC"]
      },
    },

    "Forth Year": {
      "computer": {
        "semester 1": ["", "HPC", "AI&R", "DA", "DS"],
        "semester 2": ["", "ML", "I&CS", "Compilers", "CC"]
      },

      "IT": {
        "semester 1": ["", "IS&R", "SPM", "DL", "E-III"],
        "semester 2": ["", "DS", "EL-V", "EL-VI", "S&E"]
      },
    },

  };

  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  // const [type, setType] = useState("");
  // const [subject, setSubject] = useState("");
  // const [subtypes, setSubtypes] = useState([]);
  const [branch, setBranch] = useState("");
  const [branches, setBranches] = useState([]);
  const [notes, setNotes] = useState({
    year: "",
    branch: "",
    semester: "",
    subject: "",
    type: "",
    subtype: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNotes(prevNotes => {
      const updatedNotes = { ...prevNotes, [name]: value };

      if (name === "year") {
        const yearBranches = Object.keys(subjects[value]);
        setBranches(yearBranches);
        setYear(value);
        setBranch("");
        setSemester(""); // Reset semester when year changes
      } else if (name === "branch") {
        setBranch(value);
        setSemester(""); // Reset semester when branch changes
      } else if (name === "semester") {
        setSemester(value);
      }
      return updatedNotes;
    });
  };
  const filteredSubjects = year && branch && semester ? subjects[year][branch][semester] : [];
  return (
    <div>
      <div>
        <div className='flex flex-col sm:flex-row sm:items-center gap-4 my-10 justify-center px-10 w-full mx-auto'>
          <select onChange={handleChange} name="year" value={notes.year} className='w-full  p-3 sm:w-60 text-white border border-purple-500 bg-transparent rounded-md appearance-none text-center'>
            <option value="" disabled hidden> Year </option>
            <option className='bg-option text-white'  value="First Year">First Year</option>
            <option className='bg-option text-white' value="Second Year">Second Year</option>
            <option className='bg-option text-white' value="Third Year">Third Year</option>
            <option className='bg-option text-white' value="Forth Year">Forth Year</option>
          </select>

          <select onChange={handleChange} name="branch" value={notes.branch} className='w-full sm:w-60 p-3 text-white border border-purple-500 bg-transparent rounded-md appearance-none text-center'>
            <option value="" disabled hidden>Branch</option>
            {branches.map(branch => (
              <option className='bg-option text-white' key={branch} value={branch}>{branch}</option>
            ))}
            {/* Add more branches as needed... */}
          </select>

          <select onChange={handleChange} name="semester" value={notes.semester} className='w-full sm:w-60 p-3 text-white border border-purple-500 bg-transparent rounded-md appearance-none text-center'>
            <option value="" disabled hidden>semester</option>
            <option className='bg-option text-white' value="semester 1">semester 1</option>
            <option className='bg-option text-white' value="semester 2">semester 2</option>

          </select>
          <select onChange={handleChange} name="subject" value={notes.subject} className='w-full sm:w-60 p-3 text-white border border-purple-500 bg-transparent rounded-md appearance-none text-center'>
            <option value="" disabled hidden>Subjects</option>
            {filteredSubjects.map(subject => (
              <option className='bg-option text-white' key={subject} value={subject}>{subject}</option>
            ))}
          </select>
          <select onChange={handleChange} name="type" value={notes.type} className='w-full sm:w-60 p-3 text-white border border-purple-500 bg-transparent rounded-md appearance-none text-center'>
            <option className='bg-option text-white'  value="" disabled hidden>What Do You Want...?</option>
            <option className='bg-option text-white' value="Notes">Notes</option>
            <option className='bg-option text-white' value="Practicals">Practicals</option>
            <option className='bg-option text-white' value="PYQ'S">PYQ'S</option>
            <option className='bg-option text-white' value="PPT">PPT</option>
            <option className='bg-option text-white' value="Tutorials">Tutorials</option>
          </select>

          <input
            type="text"
            name="subtype"
            value={notes.subtype}
            onChange={handleChange}
            className='w-full sm:w-60 p-3 text-white border border-purple-500 bg-transparent rounded-md appearance-none text-center'
            placeholder="Enter subtype"
          />

        </div>
      </div>
      <div className="flex items-center justify-center h-screen bg-whitish-blur backdrop-blur ">
        <form onSubmit={handleSubmit} className="w-1/2 bg-linear-gradient backdrop-blur transition-all duration-2000  rounded-lg shadow-2xl p-6 m-4">
          <div className="mb-4">
            <label htmlFor="pdf" className="block text-white text-2xl font-bold mb-2 ">Pdf:</label>
            {pdfPerc > 0 && <p className="text-white text-sm mb-2">Uploading: {pdfPerc}%</p>}
            <input
              type="file"
              accept="Pdf/*"
              id="pdf"
              onChange={(e) => setPdf((prev) => e.target.files[0])}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          <button type="submit" className=" w-full sm:w-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            Upload
          </button>
        </form>
      </div>
    </div>

  );
}

export default Upload;