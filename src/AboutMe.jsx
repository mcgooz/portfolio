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
                        <p>Hi, I'm Richard Hughes, a software developer based in Barcelona.</p>
                        <br />
                        <p>
                            I have always been a curious, hands-on, problem-solving type. When the family PC went wrong, I would take pleasure in troubleshooting it, trying to understand those cryptic blue-screen messages. 
                            Later, when I built my own PCs for music production, I would gladly spend countless hours solving driver issues, hunting down dodgy plug-ins, and optimising everything I could. 
                            Fortunately, even Windows PCs are a lot more stable these days so I can focus on the fun stuff!
                        </p>
                        <br />
                        <p>
                            I began my coding journey in November 2023. A friend, well-aware of my technical mindset and apparent knack for human languages, suggested that I give it a go, that I might enjoy it. 
                            They weren't wrong! I caught the bug and I have since completed three Harvard CS50 courses, an IBM full-stack diploma, several personal projects, and I've tried my hardest to write good unit tests.
                        </p>
                        <br />
                        <p>
                            But it's not just what's under the hood that matters. 
                            I have a keen eye for detail, a (subjectively) cool style, and the adaptability to listen, consider and learn whatever's needed. 
                            I'm as comfortable diving into code as I am thinking about the overall look, feel, and flow of a project.
                        </p>
                        <br />
                        <p>
                            Today, I'm skilled in Python and JavaScript, along with their key libraries and frameworks. 
                            I enjoy building practical, well-structured solutions and am always looking to improve my craft and the projects I work on.
                        </p>
                    </div>
                    <div className="col-span-1 justify-items-end mt-3">
                        <h2 className="text-xl mb-1">Tools & Tech</h2>
                        <ul className="text-right">
                            <li>Python | JavaScript | HTML & CSS</li>
                            <li>Django | Flask | React | Node.js</li>
                            <li>Bootstrap | Tailwind CSS</li>
                            <li>SQLite | PostgreSQL | Redis</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
)}