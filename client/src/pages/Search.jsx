import React, { useState } from 'react';
import axios from 'axios';


const subjects = {
    "First Year": {
        "semester 1": ["","M 1", "BEE", "PHY", "SME", "PPS"],
        "semester 2": ["","M 2", "BXE", "CHE", "EG", "EM"]
    },
    // Add other years and semesters here
};





function Search() {
    const [year, setYear] = useState("");
    const [semester, setSemester] = useState("");
    const [type, setType] = useState("");
    const [subject, setSubject] = useState("");
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
                        <option value="PPT">PPT</option>
                        <option value="Tutorials">Tutorials</option>
                    </select>

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