import React, { useState } from 'react';

const User = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        // Implement your file upload logic here
        if (selectedFile) {
            // Upload the selected file to the server
            console.log('Uploading file:', selectedFile);
        } else {
            console.log('No file selected');
        }
    };

    return (
        <div>
            <h1>Admin Page</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default User;