import React from 'react';

const Body = () => {
    return (
        <div className="body-container flex justify-between p-8">
    <div className="info-container w-1/2">
        <h2 className="text-2xl font-bold mb-4">Information Title</h2>
        <p className="text-lg text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquet ultricies, nisl nunc tincidunt nunc, vel aliquam nunc nisl id nunc. Sed nec nisl nec nisl aliquet ultricies. Sed nec nisl nec nisl aliquet ultricies.</p>
    </div>
    <div className="image-container w-1/2">
        <img src="mainimg.png" className="w-full h-auto" alt="" />
    </div>
</div>
    );
};

export default Body;