import React from 'react';

const Year = () => {
    const years = ['FE', 'SE', 'TE', 'BE'];

    return (
        <div className="flex flex-wrap justify-center gap-4 p-5">
            {years.map((year, index) => (
                <div className="flex items-center justify-center w-64 h-32 bg-blue-500 text-white rounded shadow-lg" key={index}>
                    <h2 className="text-2xl">{year}</h2>
                </div>
            ))}
        </div>
    );
}

export default Year;