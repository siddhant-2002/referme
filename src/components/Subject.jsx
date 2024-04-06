import React, { useState } from 'react';

const Subject = () => {
    const [expanded, setExpanded] = useState([false, false, false, false, false]);

    const toggle = index => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    return (
        <div className="w-full flex flex-col items-center justify-center space-y-4 p-8">
        {['Engineering Mathematics I(M-I)', 'Engineering Physics', 'System in Mechanical Engineering(SME)', 'Programming and Problem Solving(PPS)', 'Basic Electrical Enginnering(BEE)'].map((item, index) => (
           <div key={index} className="w-full max-w-md p-4 border border-gray-300 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
           <button 
               onClick={() => toggle(index)} 
               className="w-full text-left font-bold text-lg text-dark-blue hover:text-teal focus:outline-none "
           >
               {item}
           </button>
           {expanded[index] && (
               <div className="mt-2 space-y-2 rounded-md transition-all duration-200 ease-in-out transform ">
               <button className="w-full text-left bg-dark-blue hover:bg-teal text-off-white py-2 px-4 rounded-md font-semibold text-lg transition-colors duration-200 hover:scale-105">Notes</button>
               <button className="w-full text-left bg-dark-blue hover:bg-teal text-off-white py-2 px-4 rounded-md font-semibold text-lg transition-colors duration-200 hover:scale-105">Pracicals</button>
               <button className="w-full text-left bg-dark-blue hover:bg-teal text-off-white py-2 px-4 rounded-md font-semibold text-lg transition-colors duration-200 hover:scale-105">PYQS</button>
           </div>
           )}
       </div>
        ))}
    </div>
    );
};

export default Subject;