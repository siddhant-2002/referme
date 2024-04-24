// import React, { useState } from 'react'


// const Search = (props) => {
// const [notes, setNotes] = useState({
//     Year: "",
//     Semister: "",
//     Subject: "",
//     type: ""
// })

// const handleChange = (e) => {
//     setNotes((prevState) => ({
//         ...prevState,
//         [e.target.name]: e.target.value
//     }))
// }

// const find = async () => {
//     console.log(notes);
//     // await props.fetchJobsCustom(notes);
// }
// return (
//     <div>
//         <div className='flex gap-4 my-10 justify-center px-10'>
//             <select onChange={handleChange} name="Year" value={notes.Year} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
//                 <option value="" disabled hidden> Year </option>
//                 <option value="First Year">First Year</option>
//                 <option value="Second Year">Second Year</option>
//                 <option value="Third Year">Third Year</option>
//                 <option value="Forth Year">Forth Year</option>
//             </select>
//             <select onChange={handleChange} name="Semister" value={notes.Semister} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
//                 <option value="" disabled hidden>Semister</option>
//                 <option value="Semister 1">Semister 1</option>
//                 <option value="semister 2">semister 2</option>

//             </select>
//             <select onChange={handleChange} name="Subject" value={notes.Subject} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
//                 <option value="" disabled hidden>Subjects</option>
//                 <option value=" M 1"> M 1</option>
//                 <option value="BEE">BEE</option>
//                 <option value="BXE">BXE</option>
//                 <option value="PHY"> PHY</option>
//                 <option value="CHEM"> CHEM</option>
//                 <option value="EME"> EME</option>
//                 <option value="PPS"> PPS</option>
//                 <option value="SME"> SME </option>
//             </select>
//             <select onChange={handleChange} name="type" value={notes.type} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
//                 <option value="" disabled hidden>What Do You Want...?</option>
//                 <option value="Notes">Notes</option>
//                 <option value="Practicals">Practicals</option>
//                 <option value="PYQ'S">PYQ'S</option>

//             </select>
//             <button onClick={find} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
//         </div>
//     </div>
// )
// }

// export default Search

import React, { useState } from 'react';
import axios from 'axios';


const subjects = {
    "First Year": {
        "semester 1": ["M 1", "BEE", "BXE"],
        "semester 2": ["PHY", "CHEM", "EME"]
    },
    // Add other years and semesters here
};





function Search() {
    const [year, setYear] = useState("");
    const [semester, setSemester] = useState("");
    const [type, setType] = useState("");
    const [subject, setSubject] = useState("");
    const [subtype, setSubtype] = useState("");
    const [data, setData] = useState([]);
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

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/pdfs`, {
                params: {
                    year: notes.year,
                    semester: notes.semester,
                    subject: notes.subject,
                    type: notes.type,
                    
                },
            });
            setData(response.data);
        } catch (error) {
            console.log(error);
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

                    {/* {notes.type === "Notes" && (
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
                    )} */}

                    <button onClick={handleSearch} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>

                </div>
                {data.map((item, index) => (
                    <div key={index} className="card mx-auto my-4 p-4 shadow-lg w-1/2 border border-gray-300">
                        <h2 className="text-center text-xl font-bold mb-2">{item.subtype}</h2>
                        <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-center block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Open PDF
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search;