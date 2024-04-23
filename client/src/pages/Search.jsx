import React, { useState } from 'react'


const Search = (props) => {
    const [notes, setNotes] = useState({
        Year: "",
        Semister: "",
        Subject: "",
        type: ""
    })

    const handleChange = (e) => {
        setNotes((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const find = async () => {
        console.log(notes);
        // await props.fetchJobsCustom(notes);
    }
    return (
        <div>
            <div className='flex gap-4 my-10 justify-center px-10'>
                <select onChange={handleChange} name="Year" value={notes.Year} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                    <option value="" disabled hidden> Year </option>
                    <option value="First Year">First Year</option>
                    <option value="Second Year">Second Year</option>
                    <option value="Third Year">Third Year</option>
                    <option value="Forth Year">Forth Year</option>
                </select>
                <select onChange={handleChange} name="Semister" value={notes.Semister} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                    <option value="" disabled hidden>Semister</option>
                    <option value="Semister 1">Semister 1</option>
                    <option value="semister 2">semister 2</option>

                </select>
                <select onChange={handleChange} name="Subject" value={notes.Subject} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                    <option value="" disabled hidden>Subjects</option>
                    <option value=" M 1"> M 1</option>
                    <option value="BEE">BEE</option>
                    <option value="BXE">BXE</option>
                    <option value="PHY"> PHY</option>
                    <option value="CHEM"> CHEM</option>
                    <option value="EME"> EME</option>
                    <option value="PPS"> PPS</option>
                    <option value="SME"> SME </option>
                </select>
                <select onChange={handleChange} name="type" value={notes.type} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                    <option value="" disabled hidden>What Do You Want...?</option>
                    <option value="Notes">Notes</option>
                    <option value="Practicals">Practicals</option>
                    <option value="PYQ'S">PYQ'S</option>

                </select>
                <button onClick={find} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
            </div>
        </div>
    )
}

export default Search