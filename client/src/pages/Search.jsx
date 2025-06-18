import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "../components/Slider";
import Loaderr from "../components/Loadeerr";

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

function Search() {
  // const [imageSrc, setImageSrc] = useState({
  //     hereimg: 'here.png',
  //     whatimg: 'what.png'
  // });
  const displayRef = React.useRef(null);
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [data, setData] = useState([]);
  const [branch, setBranch] = useState("");
  const [branches, setBranches] = useState([]);
  const [on, setOn] = useState(false);
  const [notes, setNotes] = useState({
    year: "",
    semester: "",
    subject: "",
    type: "",
  });

  // Add new state for animations
  const [isVisible, setIsVisible] = useState(false);
  const [searchCount, setSearchCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      } else if (name === "type") {
        setType(value);
      } else if (name === "subject") {
        setSubject(value);
      }

      return updatedNotes;
    });
  };

  const handleSearch = async () => {
    try {
      setOn(true);
      setSearchCount((prev) => prev + 1);
      const response = await axios.get(
        `https://referme.onrender.com/api/pdfs`,
        {
          params: {
            year: notes.year,
            branch: notes.branch,
            semester: notes.semester,
            subject: notes.subject,
            type: notes.type,
          },
        }
      );
      setData(response.data);
      setOn(false);
      displayRef.current.scrollIntoView({ behavior: "smooth" });
      // setImageSrc('here.png');
    } catch (error) {
      console.log(error);
    }
  };
  const filteredSubjects =
    year && branch && semester ? subjects[year][branch][semester] : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div
        className={`glass rounded-3xl max-w-6xl mx-auto flex flex-col items-center justify-center p-8 text-gray-900 dark:text-white shadow-2xl fade-in backdrop-blur-lg bg-white/90 dark:bg-gray-800/90 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Find Your Study Materials
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Select your course details to find relevant study materials
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6 w-full max-w-4xl">
          <div className="relative group">
            <label className="absolute -top-2 left-4 bg-white dark:bg-gray-800 px-2 text-sm text-purple-600 dark:text-purple-400">
              Year
            </label>
            <select
              onChange={handleChange}
              name="year"
              value={year}
              className="w-full text-gray-900 dark:text-white border-2 border-purple-500 bg-white bg-opacity-40 dark:bg-gray-900 dark:bg-opacity-40 rounded-xl appearance-none text-center p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 hover:border-purple-600 group-hover:shadow-lg"
            >
              <option value="" disabled hidden>
                Select Year
              </option>
              <option value="First Year">First Year</option>
              <option value="Second Year">Second Year</option>
              <option value="Third Year">Third Year</option>
              <option value="Forth Year">Forth Year</option>
            </select>
          </div>

          <div className="relative group">
            <label className="absolute -top-2 left-4 bg-white dark:bg-gray-800 px-2 text-sm text-purple-600 dark:text-purple-400">
              Branch
            </label>
            <select
              onChange={handleChange}
              name="branch"
              value={branch}
              className="w-full text-gray-900 dark:text-white border-2 border-purple-500 bg-white bg-opacity-40 dark:bg-gray-900 dark:bg-opacity-40 rounded-xl appearance-none text-center p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 hover:border-purple-600 group-hover:shadow-lg"
            >
              <option value="" disabled hidden>
                Select Branch
              </option>
              {branches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          <div className="relative group">
            <label className="absolute -top-2 left-4 bg-white dark:bg-gray-800 px-2 text-sm text-purple-600 dark:text-purple-400">
              Semester
            </label>
            <select
              onChange={handleChange}
              name="semester"
              value={semester}
              className="w-full text-gray-900 dark:text-white border-2 border-purple-500 bg-white bg-opacity-40 dark:bg-gray-900 dark:bg-opacity-40 rounded-xl appearance-none text-center p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 hover:border-purple-600 group-hover:shadow-lg"
            >
              <option value="" disabled hidden>
                Select Semester
              </option>
              <option value="semester 1">Semester 1</option>
              <option value="semester 2">Semester 2</option>
            </select>
          </div>

          <div className="relative group">
            <label className="absolute -top-2 left-4 bg-white dark:bg-gray-800 px-2 text-sm text-purple-600 dark:text-purple-400">
              Subject
            </label>
            <select
              onChange={handleChange}
              name="subject"
              value={subject}
              className="w-full text-gray-900 dark:text-white border-2 border-purple-500 bg-white bg-opacity-40 dark:bg-gray-900 dark:bg-opacity-40 rounded-xl appearance-none text-center p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 hover:border-purple-600 group-hover:shadow-lg"
            >
              <option value="" disabled hidden>
                Select Subject
              </option>
              {filteredSubjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <div className="relative group">
            <label className="absolute -top-2 left-4 bg-white dark:bg-gray-800 px-2 text-sm text-purple-600 dark:text-purple-400">
              Material Type
            </label>
            <select
              onChange={handleChange}
              name="type"
              value={type}
              className="w-full text-gray-900 dark:text-white border-2 border-purple-500 bg-white bg-opacity-40 dark:bg-gray-900 dark:bg-opacity-40 rounded-xl appearance-none text-center p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 hover:border-purple-600 group-hover:shadow-lg"
            >
              <option value="" disabled hidden>
                Select Material Type
              </option>
              <option value="Notes">Notes</option>
              <option value="Practicals">Practicals</option>
              <option value="PYQ'S">PYQ'S</option>
              <option value="PPT">PPT</option>
              <option value="Tutorials">Tutorials</option>
            </select>
          </div>

          <button
            onClick={handleSearch}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 group"
          >
            <span className="flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search Materials
            </span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 w-full my-12">
          <div className="w-72 transform hover:scale-105 transition-transform duration-300">
            <img src="what.png" alt="What" className="rounded-2xl shadow-xl" />
          </div>
          <div className="w-72">
            <Slider />
          </div>
        </div>

        <div
          ref={displayRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4 w-full"
        >
          {on ? (
            <div className="col-span-full flex justify-center">
              <Loaderr />
            </div>
          ) : data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={index}
                className="card bg-white dark:bg-gray-800 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 flex items-center justify-center">
                  <img
                    src={
                      item.type === "Notes"
                        ? "notes.png"
                        : item.type === "Practicals"
                        ? "practicals.png"
                        : item.type === "PYQ'S"
                        ? "pyqs.png"
                        : item.type === "Tutorials"
                        ? "tutorials.png"
                        : "default.png"
                    }
                    alt={item.type}
                    className="w-12 h-12"
                  />
                </div>
                <h2 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">
                  {item.subtype}
                </h2>
                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 group"
                >
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Open PDF
                  </span>
                </a>
              </div>
            ))
          ) : searchCount > 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                No Results Found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search criteria
              </p>
            </div>
          ) : null}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Search;
