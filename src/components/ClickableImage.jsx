import React, { useState } from 'react';
import { CLICKABLE_IMAGE } from '../utils/helper';

const ClickableImage = () => {
    const [open, setOpen] = useState(null);

    return (
        <div
            className="flex items-center bg-cover bg-center justify-center bg-black h-screen"
            style={{
                backgroundImage: open !== null ? `url(${CLICKABLE_IMAGE[open]})` : 'none',
            }}
        >
            {open !== null && (
                <div
                    onClick={() => setOpen(null)}
                    className="fixed w-full h-full z-10 bg-black opacity-50 transition-opacity duration-300"
                ></div>
            )}
            <div className="max-w-6xl mx-auto px-4 relative z-20">
                <h2
                    className="text-center relative text-white max-sm:text-2xl text-3xl pb-8 font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
                >
                    Explore Stunning Images - Click to Expand!
                </h2>
                <div className="flex gap-3 justify-center flex-wrap">
                    {CLICKABLE_IMAGE.map((obj, i) => (
                        <img
                            onClick={() => setOpen(open === i ? null : i)}
                            key={i}
                            src={obj}
                            alt={`image-${i}`}
                            className={`object-cover border border-solid border-white h-64 max-sm:h-40 rounded-3xl transition-all duration-300 cursor-pointer hover:scale-110 ${open === i ? 'w-96 max-sm:w-56' : 'w-8 max-sm:w-4'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClickableImage;