
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Year = () => {
    const [expanded, setExpanded] = useState([false, false, false, false]);

    const toggle = index => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    const navigate = useNavigate();

    return (
        <div className="w-full flex flex-col items-center justify-center space-y-4 p-8">
        {['First Year', 'Second Year', 'Third Year', 'Fourth Year'].map((item, index) => (
           <div key={index} className="w-full max-w-md p-4 border border-gray-300 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
           <button 
               onClick={() => toggle(index)} 
               className="w-full text-left font-bold text-lg text-dark-blue hover:text-teal focus:outline-none "
           >
               {item}
           </button>
           {expanded[index] && (
               <div className="mt-2 space-y-2 rounded-md transition-all duration-200 ease-in-out transform ">
               <button className="w-full text-left bg-dark-blue hover:bg-teal text-off-white py-2 px-4 rounded-md font-semibold text-lg transition-colors duration-200 hover:scale-105" onClick={() => navigate('/Subject')} >Semister 1</button>
               <button className="w-full text-left bg-dark-blue hover:bg-teal text-off-white py-2 px-4 rounded-md font-semibold text-lg transition-colors duration-200 hover:scale-105">Semister 2</button>
           </div>
           )}
       </div>
        ))}
    </div>
    );
};

export default Year;


// const Year = () => {
//     const years = ['FE', 'SE', 'TE', 'BE'];

//     return (
//         <div className="flex flex-col justify-center items-center gap-4 p-5">
//             {years.map((year, index) => (
                
//                     <div className="flex items-center justify-center w-64 h-32 bg-blue-500 text-white rounded shadow-lg">
//                         <h2 className="text-2xl">{year}</h2>
//                     </div>
                
//             ))}
//         </div>
//     );
// }