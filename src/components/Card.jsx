import React from 'react';

const Card = ({ name, image, height, weight, types, url }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-64">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-700">Peso: {height}</p>
                <p className="text-gray-700">Altura: {weight}</p>
                <a href={url} className="text-blue-500 hover:underline mt-2 block">
                    Más info
                </a>
            </div>
        </div>
    );
};

export default Card;
