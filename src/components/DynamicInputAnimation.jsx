import React, { useState, useEffect } from "react";

const DynamicInputAnimation = () => {
    const [input, setInput] = useState(false);
    const [inputTwo, setInputTwo] = useState(false);

    const handleInputChange = (e) => {
        if (e.target.value.length >= 1) {
            setTimeout(() => {
                setInput(true);
            }, 2000);
        } else {
            setInput(false);
            setInputTwo(false);
        }
    };

    useEffect(() => {
        if (input) {
            setTimeout(() => {
                setInputTwo(true);
            }, 2000);
        }
    }, [input]);

    return (
        <div className="min-h-screen bg-black flex flex-col overflow-hidden justify-center items-center gap-6">
            <h2 className="font-bold text-3xl text-white text-center">
                How can I help you today?
            </h2>
            <input
                type="text"
                onChange={handleInputChange}
                className={`border rounded-lg bg-white py-2 px-4 text-lg transition-all duration-[2000ms] origin-left ${input && "rotate-90 pl-20"
                    } ${inputTwo && "translate-y-96"}`}
                placeholder="Type something..."
            />
        </div>
    );
};

export default DynamicInputAnimation;
