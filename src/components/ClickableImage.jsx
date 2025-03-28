import React, { useState } from 'react';
import { CLICKABLE_IMAGE } from '../utils/helper';

const ClickableImage = () => {
    const [open, setOpen] = useState(null);

    return (
        <div
            className='flex items-center bg-cover bg-center justify-center bg-black h-screen'
            style={{
                backgroundImage: open !== null ? `url(${CLICKABLE_IMAGE[open]})` : 'none',
            }}
        >
            {open !== null && (
                <div onClick={() => setOpen(null)} className='fixed w-full h-full z-10'></div>
            )}
            <div className='max-w-6xl mx-auto px-4'>
                <h2 className='text-center z-20 relative text-white max-sm:text-2xl text-3xl pb-8 font-semibold'>
                    Click On The Image
                </h2>
                <div className='flex gap-3 justify-center'>
                    {CLICKABLE_IMAGE.map((obj, i) => (
                        <img
                            onClick={() => setOpen(open === i ? null : i)}
                            key={i}
                            src={obj}
                            alt='kali'
                            className={`object-cover border border-solid border-white z-20 h-64 max-sm:h-40 rounded-3xl transition-all duration-300 cursor-pointer ${open === i ? 'w-96 max-sm:w-56' : 'w-8 max-sm:w-4'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClickableImage;
