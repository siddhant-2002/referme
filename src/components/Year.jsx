// Year.jsx

import React from 'react';
import './Year.css';

const Year = () => {
    const years = ['FE', 'SE', 'TE', 'BE'];

    return (
        <div className="card-container">
            {years.map((year, index) => (
                <div className="card" key={index}>
                    <h2>{year}</h2>
                </div>
            ))}
        </div>
    );
}

export default Year;