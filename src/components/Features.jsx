import React from 'react';

const Features = () => {
  const cards = ['Notes', 'Practicals', 'Projects', 'Question Paper'];
  const images = ['notes1.png', 'practical1.png', 'project2.png', 'pyq.png'];

  return (
    <div className="p-6 bg-teal">
      <h1 className="text-3xl font-bold mb-4 text-center text-off-white">Features</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div className="border border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center bg-off-white transform hover:scale-105 transition-transform duration-300" key={index}>
            <h2 className="font-semibold text-xl mb-2 text-center text-teal">{card}</h2>
            <img
              src={images[index]}
              className="w-3/4 h-auto my-4"
              alt={card}
            />
            <p className="text-center text-teal">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;