import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const images = {
    '144P': '/assets/image/png/144p.png',
    '480p': '/assets/image/png/480p.png',
    '720p': '/assets/image/png/720.png',
    '1080p': '/assets/image/png/1080p.png',
};

const DynamicDropDown = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl mt-4">Dynamic Dropdown</h2>
            <div className="mt-6 flex justify-center items-center flex-col ">
                <h2 className="text-2xl mb-4">Select your moon quality</h2>
                <select onChange={handleSelectChange} className="mb-4 p-2 bg-gray-800 text-white rounded">
                    <option value="">Select an option</option>
                    {Object.keys(images).map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>

            {selectedOption && (
                <div className='mt-5'>
                    <img src={images[selectedOption]} alt={selectedOption} className="w-64 h-64 object-contain" />
                </div>
            )}
        </div>
    );
};

export default DynamicDropDown;
