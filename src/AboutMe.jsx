export default function AboutMe({ show, onClose }) {
    if (!show) return null;

    return (
        <div 
            className="
                fixed inset-0 z-50
                flex items-center justify-center
                bg-black/70 backdrop-blur-sm
                transition-opacity duration-1000">
            
            <div className="rounded-sm p-6 max-w-4xl w-full mx-4 relative">
                <button
                    onClick={(onClose)}
                    className="absolute cursor-pointer top-5 right-5 hover:text-myblue-500"
                >
                    ✕
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 text-[0.9rem] mt-6 v-scroller">
                    <div className="col-span-2">
                        <h2 className="text-xl mb-1">About Me</h2>
                        <p>Hi, I'm Richard, a software developer based in Barcelona.</p>
                        <br />
                        <p>
                            I've always been drawn to problem-solving and understanding how systems work. 
                            That curiosity started early through troubleshooting computers and building my own PCs for music production, 
                            where I spent a lot of time resolving hardware and software issues and optimising performance.

                        </p>
                        <br />
                        <p>
                            I began learning to code in 2023 after a friend suggested it might suit my way of thinking.
                            Since then, I've completed several Harvard CS50 courses, an IBM full-stack diploma, and built multiple projects, with a focus on writing clean, maintainable code.
                        </p>
                        <br />
                        <p>
                            Alongside the technical side, I care about how software feels to use. 
                            I enjoy refining UI, improving flow, and making applications feel clear and intuitive.
                        </p>
                        <br />
                        <p>
                            Today, I work with Python and JavaScript, along with their main frameworks and tools. 
                            I enjoy building practical applications, working through technical problems, and improving existing systems as well as new ones.
                        </p>
                    </div>
                    <div className="col-span-1 justify-items-end mt-3">
                        <h2 className="text-xl mb-1">Tools & Tech</h2>
                        <ul className="text-right">
                            <li>Python | JavaScript | HTML & CSS</li>
                            <li>Django | Flask | React | Node.js</li>
                            <li>Bootstrap | Tailwind CSS</li>
                            <li>SQLite | PostgreSQL | MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
)}