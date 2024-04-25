import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase';




const Upload = () => {

	const [pdf, setPdf] = useState(undefined);

	const [pdfPerc, setPdfPerc] = useState(0);

	const [inputs, setInputs] = useState({});

	const [notes, setNotes] = useState({
		Year: "",
		Semister: "",
		Subject: "",
		type: "",
		units: " "
	})

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



	// search code



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

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post(`http://localhost:5000/api/pdfs`, { ...inputs, ...notes });
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
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
					<select onChange={handleChange} name="units" value={notes.units} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
						<option value="" disabled hidden>Unit</option>
						<option value="Unit 1"> Unit 1</option>
						<option value="Unit 2">Unit 2</option>
						<option value="Unit 3">Unit 3</option>
						<option value="Unit 4"> Unit 4</option>
						<option value="Unit 5"> Unit 5</option>
						<option value="Unit 6"> Unit 6</option>
					</select>
					{/* <button onClick={find} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button> */}
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
					<button type="submit" onClick={find} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
						Upload
					</button>
				</form>
			</div>
		</div>

	);
}

export default Upload;