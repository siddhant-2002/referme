import React from 'react';

const Features = () => {
  const cards = ['Notes', 'Practicals', 'Projects', 'Question Paper'];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Features</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div className="border border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500" key={index}>
            <h2 className="font-semibold text-xl mb-2">{card}</h2>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;