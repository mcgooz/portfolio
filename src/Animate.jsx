import { useEffect, useState } from "react";

function RainCube({ left, delay, duration }) {
    return (
        <>

            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="absolute w-5 h-5 opacity-50 animate-fall pointer-events-none"
                style={{
                    left: `${left}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                }}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>

        </>
    );
}

export default function Animate({ children }) {
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        const newIcons = Array.from({length: 25 }).map(() => ({
            left: Math.random() * 100,
            delay: -Math.random() * 5,
            duration: 5 + Math.random() * 5,
        }));
        setIcons(newIcons)
    }, []);

    return (
        <>
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            {icons.map((icon, index) =>(
                <RainCube key={index} {...icon} />
            ))}
        </div>
        <div>{ children}</div>
        </>
    );
}