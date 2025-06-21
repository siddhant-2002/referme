import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  };

  const handleSubmit = async (e) => {
    // console.log(notes);
    e.preventDefault();
    if (!pdf) {
      toast.error("Please select a PDF");
      return;
    }
    if (!notes) {
      toast.error("Please Enter specifications");
      return;
    }
    try {
      await axios.post(`http://localhost:5000/Postpdfs`, {
        ...inputs,
        ...notes,
      });
      toast.success("Pdf uploaded successfully");
      // window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    }
  };

  const subjects = {
    "First Year": {
      FE: {
        "semester 1": ["", "M 1", "BEE", "PHY", "SME", "PPS"],
        "semester 2": ["", "M 2", "BXE", "CHE", "EG", "EM"],
      },
    },
    // Add other years and semesters here

    "Second Year": {
      computer: {
        "semester 1": ["", "DM", "FDS", "OOP", "CG", "DELD"],
        "semester 2": ["", "M 3", "DSA", "SE", "MP", "PPL"],
      },
      IT: {
        "semester 1": ["", "DM", "LDCO", "DSA", "OOP", "BCN"],
        "semester 2": ["", "M3", "PA", "DBMS", "CG", "SE"],
      },
    },

    "Third Year": {
      computer: {
        "semester 1": ["", "DBMS", "TOC", "SPOS", "CNS"],
        "semester 2": ["", "DSBDA", "WT", "AI", "CC"],
      },

      IT: {
        "semester 1": ["", "TOC", "OS", "ML", "HCI"],
        "semester 2": ["", "CNS", "DSBDA", "WAD", "CC"],
      },
    },

    "Forth Year": {
      computer: {
        "semester 1": ["", "HPC", "AI&R", "DA", "DS"],
        "semester 2": ["", "ML", "I&CS", "Compilers", "CC"],
      },

      IT: {
        "semester 1": ["", "IS&R", "SPM", "DL", "E-III"],
        "semester 2": ["", "DS", "EL-V", "EL-VI", "S&E"],
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
    subtype: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNotes((prevNotes) => {
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
  const filteredSubjects =
    year && branch && semester ? subjects[year][branch][semester] : [];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Upload Study Material
          </h2>
          <p className="text-gray-300">
            Share your knowledge with the community
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <select
              onChange={handleChange}
              name="year"
              value={notes.year}
              className="w-full p-3 text-white border border-purple-500 bg-black/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            >
              <option value="" disabled hidden>
                Select Year
              </option>
              <option className="bg-gray-800" value="First Year">
                First Year
              </option>
              <option className="bg-gray-800" value="Second Year">
                Second Year
              </option>
              <option className="bg-gray-800" value="Third Year">
                Third Year
              </option>
              <option className="bg-gray-800" value="Forth Year">
                Fourth Year
              </option>
            </select>

            <select
              onChange={handleChange}
              name="branch"
              value={notes.branch}
              className="w-full p-3 text-white border border-purple-500 bg-black/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            >
              <option value="" disabled hidden>
                Select Branch
              </option>
              {branches.map((branch) => (
                <option className="bg-gray-800" key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>

            <select
              onChange={handleChange}
              name="semester"
              value={notes.semester}
              className="w-full p-3 text-white border border-purple-500 bg-black/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            >
              <option value="" disabled hidden>
                Select Semester
              </option>
              <option className="bg-gray-800" value="semester 1">
                Semester 1
              </option>
              <option className="bg-gray-800" value="semester 2">
                Semester 2
              </option>
            </select>

            <select
              onChange={handleChange}
              name="subject"
              value={notes.subject}
              className="w-full p-3 text-white border border-purple-500 bg-black/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            >
              <option value="" disabled hidden>
                Select Subject
              </option>
              {filteredSubjects.map((subject) => (
                <option className="bg-gray-800" key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>

            <select
              onChange={handleChange}
              name="type"
              value={notes.type}
              className="w-full p-3 text-white border border-purple-500 bg-black/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            >
              <option value="" disabled hidden>
                Select Type
              </option>
              <option className="bg-gray-800" value="Notes">
                Notes
              </option>
              <option className="bg-gray-800" value="Practicals">
                Practicals
              </option>
              <option className="bg-gray-800" value="PYQ'S">
                PYQ'S
              </option>
              <option className="bg-gray-800" value="PPT">
                PPT
              </option>
              <option className="bg-gray-800" value="Tutorials">
                Tutorials
              </option>
            </select>

            <input
              type="text"
              name="subtype"
              value={notes.subtype}
              onChange={handleChange}
              className="w-full p-3 text-white border border-purple-500 bg-black/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="Enter subtype (optional)"
            />
          </div>

          <div className="mt-8">
            <div className="bg-black/30 rounded-lg p-6 border border-purple-500">
              <label
                htmlFor="pdf"
                className="block text-white text-xl font-semibold mb-4"
              >
                Upload PDF File
              </label>
              {pdfPerc > 0 && (
                <div className="mb-4">
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${pdfPerc}%` }}
                    ></div>
                  </div>
                  <p className="text-white text-sm mt-2">
                    Uploading: {pdfPerc}%
                  </p>
                </div>
              )}
              <input
                type="file"
                accept=".pdf"
                id="pdf"
                onChange={(e) => setPdf((prev) => e.target.files[0])}
                className="block w-full text-sm text-gray-300
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-purple-600 file:text-white
                  hover:file:bg-purple-700
                  cursor-pointer"
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Upload Material
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
