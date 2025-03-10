import React, { useState } from 'react';
const SeesawToggle = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`min-h-screen flex justify-center overflow-hidden relative flex-col gap-3 items-center transition-all duration-300`}>
            <div className={`absolute top-0 rounded-full bg-red-200 left-[-40px] size-10 transition-all duration-700 ${open ? "!scale-[90]" : ""}`}></div>
            <div className={`absolute top-0 rounded-full bg-blue-200 right-[-40px] size-10 transition-all duration-700 ${!open ? "!scale-[90]" : ""}`}></div>
            <h2 className='text-5xl max-sm:text-4xl uppercase relative z-50 font-sohne text-black mb-5'>Seesaw Toggle</h2>
            <h3 className='text-4xl max-sm:text-3xl uppercase relative z-50 font-sohne text-black mb-5'>Click On Red and BLue Circle</h3>
            <div className="relative w-[200px] overflow-hidden z-50 rounded-md h-[100px]">
                <button
                    onClick={() => setOpen(true)}
                    className={`absolute cursor-pointer top-0 left-0 transition-all duration-300 rounded-full bg-red-500 ${open ? "!size-[80px]" : "!size-[50px]"
                        }`}
                ></button>
                <button
                    onClick={() => setOpen(false)}
                    className={`absolute cursor-pointer top-0 right-0 transition-all duration-300 rounded-full bg-blue-500 ${open ? "!size-[50px]" : "!size-[80px]"
                        }`}
                ></button>
                <div
                    className={`w-[90%] bg-black h-1 rounded-full left-[50%] absolute bottom-[25%] transition-all duration-300 -translate-x-1/2 ${open ? "rotate-[-13deg]" : "rotate-[13deg]"
                        }`}
                ></div>
                <div className="size-10 rotate-45 absolute left-1/2 bg-black -bottom-5 -translate-x-1/2"></div>
            </div>
        </div>
    );
};

export default SeesawToggle;
