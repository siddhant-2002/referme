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
    try {

      await axios.post(`http://localhost:5000/api/pdfs`, {
        ...inputs,
        ...notes,

      });
      toast.success("Pdf uploaded successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
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
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [subtypes, setSubtypes] = useState([]);
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
      } else if (name === "type") {
        setType(value);
        if (value === "Notes" || value === "PPT") {
          setSubtypes(["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6"]);
        } else if (value === "Tutorials") {
          setSubtypes(["Tutorial 1", "Tutorial 2", "Tutorial 3", "Tutorial 4", "Tutorial 5", "Tutorial 6", "Tutorial 7", "Tutorial 8", "Tutorial 9", "Tutorial 10"]);
        } else if (value === "PYQ'S") {
          setSubtypes(["2018", "2019", "2020", "2021", "2022", "2023"]);
        }
        else if (value === "Practicals") {
          setSubtypes(["Practical 1", "Practical 2", "Practical 3", "Practical 4", "Practical 5", "Practical 6"])
        }
        else {
          setSubtypes([]);
        }
      }
      else if (name === "subject") {
        setSubject(value);
      }

      return updatedNotes;
    });
  };
  const filteredSubjects = year && branch && semester ? subjects[year][branch][semester] : [];
  return (
    <div>
      <div>
        <div className='flex gap-4 my-10 justify-center px-10'>
          <select onChange={handleChange} name="year" value={notes.year} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden> Year </option>
            <option value="First Year">First Year</option>
            <option value="Second Year">Second Year</option>
            <option value="Third Year">Third Year</option>
            <option value="Forth Year">Forth Year</option>
          </select>

          <select onChange={handleChange} name="branch" value={notes.branch} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Branch</option>
            {branches.map(branch => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
            {/* Add more branches as needed... */}
          </select>

          <select onChange={handleChange} name="semester" value={notes.semester} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>semester</option>
            <option value="semester 1">semester 1</option>
            <option value="semester 2">semester 2</option>

          </select>
          <select onChange={handleChange} name="subject" value={notes.subject} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Subjects</option>
            {filteredSubjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
          <select onChange={handleChange} name="type" value={notes.type} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>What Do You Want...?</option>
            <option value="Notes">Notes</option>
            <option value="Practicals">Practicals</option>
            <option value="PYQ'S">PYQ'S</option>
            <option value="PPT">PPT</option>
            <option value="Tutorials">Tutorials</option>
          </select>

          {notes.type && (
            <select onChange={handleChange} name="subtype" value={notes.subtype} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
              <option value="" disabled hidden>Select subtype</option>
              {subtypes.map(subtype => (
                <option key={subtype} value={subtype}>{subtype}</option>
              ))}
            </select>
          )}

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