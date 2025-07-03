import { useState } from "react"
import AboutMe from "./AboutMe"

export default function Header() {
    const [showAbout, setShowAbout] = useState(false);

    return (
        <div className='flex flex-col items-end gap-1 py-3 me-3'>
            <div className='flex items-center gap-1'>
                <h3 
                    className='ms-3 cursor-pointer animate-pulse hover:text-mygreen hover:backdrop-blur-xs hover:scale-104 rounded transition'
                    onClick={() => setShowAbout(true)}
                >
                    Richard Hughes
                </h3>
                <a href='https://github.com/mcgooz' target="_blank" rel="noopener noreferrer">
                <img className='w-5 object-contain' src='assets/github-mark.png'/>
                </a>
                <a href='https://www.linkedin.com/in/richard-h-410696123/' target="_blank" rel="noopener noreferrer">
                <img className='w-5 object-contain' src='assets/LI-In-Bug.png'/>
                </a>
            </div>
                <p className='text-[0.8rem] me-1'>
                    Software Developer | Barcelona
                </p>
            <AboutMe show={showAbout} onClose={() => setShowAbout(false)} />
        </div>
    )
}