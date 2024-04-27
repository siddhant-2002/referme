import React, { useState } from 'react';
import axios from 'axios';
import Slider from '../components/Slider';



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

    "htmlForth Year": {
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





function Search() {
    // const [imageSrc, setImageSrc] = useState({
    //     hereimg: 'here.png',
    //     whatimg: 'what.png'
    // });

    const [year, setYear] = useState("");
    const [semester, setSemester] = useState("");
    const [type, setType] = useState("");
    const [subject, setSubject] = useState("");
    const [data, setData] = useState([]);
    const [branch, setBranch] = useState("");
    const [branches, setBranches] = useState([]);
    const [notes, setNotes] = useState({
        year: "",
        semester: "",
        subject: "",
        type: "",
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
            } else if (name === "subject") {
                setSubject(value);
            }

            return updatedNotes;
        });
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/pdfs`, {
                params: {
                    year: notes.year,
                    branch: notes.branch,
                    semester: notes.semester,
                    subject: notes.subject,
                    type: notes.type,

                },
            });
            setData(response.data);
            // setImageSrc('here.png');
        } catch (error) {
            console.log(error);
        }
    };
    const filteredSubjects = year && branch && semester ? subjects[year][branch][semester] : [];

    return (
        <div>
            <div className=''>
                <div className='flex flex-col sm:flex-row sm:items-center gap-4 my-10 justify-center px-10 w-full mx-auto'>
                    <select onChange={handleChange} name="year" value={year} className='w-60 sm:w-60 text-white border border-purple-500 bg-transparent rounded-md appearance-none text-center p-2'>
                        <option value="" disabled hidden> Year </option>
                        <option className='bg-option text-white' value="First Year">First Year</option>
                        <option className='bg-option text-white' value="Second Year">Second Year</option>
                        <option className='bg-option text-white' value="Third Year">Third Year</option>
                        <option className='bg-option text-white' value="htmlForth Year">Forth Year</option>
                    </select>

                    <select onChange={handleChange} name="branch" value={branch} className='w-60 sm:w-60 text-white border border-purple-500 bg-transparent rounded-md appearance-none text-center p-2'>
                        <option value="" disabled hidden>Branch</option>
                        {branches.map(branch => (
                            <option className='bg-option text-white' key={branch} value={branch}>{branch}</option>
                        ))}
                        {/* Add more branches as needed... */}
                    </select>

                    <select onChange={handleChange} name="semester" value={semester} className='w-60 sm:w-60 text-white border border-purple-500 bg-transparent rounded-md appearance-none text-center p-2'>
                        <option className='bg-option text-white' value="" disabled hidden>semester</option>
                        <option className='bg-option text-white' value="semester 1">semester 1</option>
                        <option className='bg-option text-white' value="semester 2">semester 2</option>

                    </select>
                    <select onChange={handleChange} name="subject" value={subject} className='w-60 sm:w-60 text-white border border-purple-500 bg-transparent rounded-md appearance-none text-center p-2'>
                        <option value="" disabled hidden>Subjects</option>
                        {filteredSubjects.map(subject => (
                            <option className='bg-option text-white' key={subject} value={subject}>{subject}</option>
                        ))}
                    </select>
                    <select onChange={handleChange} name="type" value={type} className='w-60 sm:w-60 text-white border border-purple-500 bg-transparent rounded-md appearance-none text-center p-2'>
                        <option className='bg-option text-white' value="" disabled hidden>What Do You Want...?</option>
                        <option className='bg-option text-white' value="Notes">Notes</option>
                        <option className='bg-option text-white' value="Practicals">Practicals</option>
                        <option className='bg-option text-white' value="PYQ'S">PYQ'S</option>
                        <option className='bg-option text-white' value="PPT">PPT</option>
                        <option className='bg-option text-white' value="Tutorials">Tutorials</option>
                    </select>

                    <button onClick={handleSearch} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>

                </div>

                <div className='bg-whitish-blur backdrop-blur flex justify-center space-x-10 md:flex-row h-full m-10 rounded-xl hover:border border-purple-400 hover:bg-transparent hover:shadow-lg hover:scale-105 hover:shadow-glow transition-all duration-200'>
  <div className='w-60'>
    <img src="what.png" alt='' className='' />
  </div>

  <div className='w-60'>
    <Slider />
  </div>
</div>

                <div className=' text-white flex flex-wrap justify-center items-center gap-4 p-2 sm:p-5 md:p-10'>
                    {data.map((item, index) => (
                     <div key={index} className="hover:border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center transform hover:scale-105 bg-whitish-blur backdrop-blur duration-2000 p-2 sm:p-5 md:p-10">
                     <img src="notes.png" className='w-12 sm:w-16 md:w-32 mb-2 sm:mb-4' alt="" />
                     <h2 className="text-center text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">{item.subtype}</h2>
                     <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-center block bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 md:py-3 md:px-6">
                         Open PDF
                     </a>
                 </div>
                    ))}
                </div>



            </div>
        </div>
    )
}

export default Search;