import React, { useState } from 'react';

const ToggleButton = () => {
    const [open, setOpen] = useState(false);
    const [secondButton, setSecondButton] = useState(false);
    const [thirdButton, setThirdButton] = useState(false);

    const FirstButton = () => {
        setOpen(!open);
        setSecondButton(false);
        setThirdButton(false);
    };

    const SecondButton = () => {
        setSecondButton(!secondButton);
        setOpen(false);
        setThirdButton(false);
    };

    const ThirdButton = () => {
        setThirdButton(!thirdButton);
        setSecondButton(false);
        setOpen(false);
    };

    return (
        <div className="min-h-screen flex flex-col py-12 text-xl font-bold justify-center items-center bg-gray-100">
            <p className="text-center mb-4">First Button</p>
            <div
                onClick={FirstButton}
                className={`w-32 h-14 rounded-full cursor-pointer relative bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg hover:scale-105 transition-transform duration-300`}
            >
                <div
                    className={`w-10 h-10 bg-white rounded-full shadow-md absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                        open ? 'left-[65%]' : 'left-[5%]'
                    }`}
                ></div>
            </div>
            <p className="text-center mt-8 mb-4">Second Button</p>
            <div
                onClick={SecondButton}
                className={`w-32 h-14 rounded-full cursor-pointer relative bg-gradient-to-r from-green-400 to-green-600 shadow-lg hover:scale-105 transition-transform duration-300`}
            >
                <div
                    className={`w-10 h-10 bg-white rounded-full shadow-md absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                        secondButton ? 'left-[65%]' : 'left-[5%]'
                    }`}
                ></div>
            </div>
            <p className="text-center mt-8 mb-4">Third Button</p>
            <div
                onClick={ThirdButton}
                className={`w-32 h-14 rounded-full cursor-pointer relative bg-gradient-to-r from-red-400 to-red-600 shadow-lg hover:scale-105 transition-transform duration-300`}
            >
                <div
                    className={`w-10 h-10 bg-white rounded-full shadow-md absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                        thirdButton ? 'left-[65%]' : 'left-[5%]'
                    }`}
                ></div>
            </div>
        </div>
    );
};

export default ToggleButton;
