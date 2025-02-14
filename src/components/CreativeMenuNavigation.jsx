import React, { useState } from 'react'
import { DiscordIcon, FaceBookIcon, WhatsappIcon, InstagramIcon, CrossIcon, YoutubeIcon, GmailIcon, TwitterIcon, TelegramIcon } from '../utils/icon'
import { Link } from 'react-router-dom'

const CreativeMenuNavigation = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className={`min-h-screen bg-black flex justify-center flex-col items-center`}>
            <h2 className='text-5xl max-sm:text-4xl uppercase font-sohne text-white mb-5'>Creative Menu Navigation</h2>
            <div className='size-[320px] p-5 gap-[17px] border-2 bg-slate-300 flex flex-wrap justify-center items-center border-solid border-black rounded-xl mx-auto'>
                <div className={`flex relative justify-center flex-col gap-[17px] ${open ? '' : 'cursor-pointer'}`}>
                    {open === false && <div onClick={() => setOpen(true)} className='w-full h-full absolute z-20 top-0 left-0 '>
                    </div>}
                    <div className='flex justify-center items-center gap-[17px]'>
                        <Link target='_blank' to={'https://www.facebook.com/'} className={`flex bg-white justify-center items-center w-20 h-20 rounded-xl transition-all duration-300 group ${open ? '' : 'gap-2 !size-2'} `}><FaceBookIcon pathClass={"group-hover:fill-blue-500"} myClass={` transition-all duration-300 ${open ? 'w-[75%]' : '!w-0 !opacity-0'}`} /></Link>
                        <Link target='_blank' to={'https://www.whatsapp.com/'} className={`flex bg-white justify-center items-center w-20 h-20 rounded-xl group transition-all duration-300 ${open ? '' : 'gap-2 !size-2'} `}><WhatsappIcon pathClass={"group-hover:fill-green-600"} myClass={` transition-all duration-300 ${open ? 'w-[75%]' : '!w-0 !opacity-0'}`} /></Link>
                        <Link target='_blank' to={'https://discord.com/'} className={`flex bg-white justify-center items-center w-20 h-20 rounded-xl transition-all duration-300 group ${open ? '' : 'gap-2 !size-2'} `}><DiscordIcon pathClass={"group-hover:fill-blue-500"} myClass={` transition-all duration-300 ${open ? 'w-[75%]' : '!w-0 !opacity-0'}`} /></Link>
                    </div>
                    <div className='flex justify-center items-center gap-[17px]'>
                        <Link target='_blank' to={'https://www.instagram.com/'} className={`flex bg-white justify-center items-center w-20 h-20 rounded-xl transition-all duration-300 group  ${open ? '' : 'gap-2 !size-2'} `}><InstagramIcon pathClass={"group-hover:fill-pink-500"} myClass={`  transition-all duration-300 ${open ? 'w-[75%]' : '!w-0 !opacity-0'}`} /></Link>
                        <button onClick={() => setOpen(!open)} className={`flex bg-white justify-center items-center w-20 h-20 rounded-xl transition-all duration-300 group ${open ? '' : 'gap-2 !size-2'} `}> <CrossIcon myClass={` group-hover:animate-spin transition-all duration-300 ${open ? 'w-[75%]' : '!w-0 !opacity-0'}`} /> </button>
                        <Link target='_blank' to={'https://www.youtube.com/'} className={`flex bg-white justify-center items-center w-20 h-20 rounded-xl transition-all duration-300 group ${open ? '' : 'gap-2 !size-2'} `}> <YoutubeIcon pathClass={"group-hover:fill-red-500"} myClass={` transition-all duration-300 ${open ? 'w-[75%]' : '!w-0 !opacity-0'}`} /> </Link>
                    </div>
                    <div className='flex justify-center items-center gap-[17px]'>
                        <Link target='_blank' to={'https://mail.google.com/mail/u/0/'} className={`flex bg-white justify-center items-center w-20 h-20 rounded-xl transition-all duration-300 group ${open ? '' : 'gap-2 !size-2'} `}> <GmailIcon pathClass={'group-hover:fill-red-500'} myClass={` transition-all duration-300 ${open ? 'w-[75%]' : '!w-0 !opacity-0'}`} /> </Link>
                        <Link target='_blank' to={'https://x.com/?lang=en&mx=2'} className={`flex bg-white justify-center items-center w-20 h-20 rounded-xl transition-all duration-300 group ${open ? '' : 'gap-2 !size-2'} `}> <TwitterIcon pathClass={"group-hover:fill-blue-500"} myClass={` transition-all duration-300 ${open ? 'w-[75%]' : '!w-0 !opacity-0'}`} /> </Link>
                        <Link target='_blank' to={'https://telegram.org/'} className={`flex bg-white justify-center items-center w-20 h-20 rounded-xl transition-all duration-300 group ${open ? '' : 'gap-2 !size-2'} `}> <TelegramIcon pathClass={"group-hover:fill-blue-500"} myClass={`  transition-all duration-300 ${open ? 'w-[75%]' : '!w-0 !opacity-0'}`} /> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreativeMenuNavigation
