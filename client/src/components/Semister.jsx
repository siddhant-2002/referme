import React from 'react';
import { Link } from 'react-router-dom';

const Semister = () => {
    const semisters = ['Sem-I', 'Sem-II'];

    return (
        <div className="flex flex-wrap justify-center gap-4 p-5">
            {semisters.map((semister, index) => (
                <Link to="/subject" key={index}>
                    <div className="flex items-center justify-center w-64 h-32 bg-blue-500 text-white rounded shadow-lg">
                        <h2 className="text-2xl">{semister}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Semister;