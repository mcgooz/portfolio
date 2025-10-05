import Projects from "./Projects";
import HScroller from "./HScroller";
import ProjectData from './ProjectData';
import React, { useState } from "react";


export default function ProjectList() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            {/* Horizontal Scroller for large/medium screens */}
            <div className="hidden lg:flex">
                <HScroller className="h-scroller">
                    {[...ProjectData].reverse().map((project => (
                        <Projects
                            key={project.id}
                            featuredImage={project.featuredImage}
                            title={project.title}
                            onClick={() => {
                                console.log("Clicked:", project.title)
                                setSelectedProject(project)}
                            }
                        />
                    )))}
                </HScroller>
            </div>
            
            {/* Vertical scroll for small screens */}
            <div className="flex flex-col space-y-4 lg:hidden">                
                <div className="v-scroller">
                    {[...ProjectData].reverse().map((project => (
                        <Projects
                            key={project.id}
                            featuredImage={project.featuredImage}
                            title={project.title}
                            onClick={() => {
                                console.log("Clicked:", project.title)
                                setSelectedProject(project)}
                            }
                        />
                    )))}
                </div>
            </div>

                {/* Render selected project overlay */}
                {selectedProject && (
                    <div
                        className={`
                            fixed inset-0 z-50
                            flex items-center justify-center
                            bg-black/70 backdrop-blur-sm
                            transition-opacity duration-1000
                            ${selectedProject ? "opacity-100" : "opacity-0 pointer-events-none"}
                        `}
                        >
                        
                        <div className="rounded-sm p-6 max-w-4xl w-full mx-4 relative">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute cursor-pointer top-5 right-5 hover:text-myblue-500"
                            >
                                ✕
                            </button>
                            <h2 className="text-2xl mb-2">{selectedProject.title}</h2>
                            <p className="mb-4">{selectedProject.description}</p>

                            
                            {selectedProject.details.map((detail, idx) => (
                                    <p className="text-[0.8rem]" key={idx}>{detail}</p>     
                                ))}

                            {/* Additional images */}
                            {selectedProject.screenshots.length > 1 ? (
                                <HScroller className="h-scroller">
                                    {selectedProject.screenshots?.map((src, idx) => (
                                        <img
                                            key={idx}
                                            src={src}
                                            alt={`${selectedProject.title} screenshot ${idx + 1}`}
                                            className="rounded-sm me-5 mt-2"
                                        />
                                    ))}
                                </HScroller>
                            ) : (

                                <img
                                    key={selectedProject.id}
                                    src={selectedProject.featuredImage}
                                    alt={`${selectedProject.title} image`}
                                    className="rounded-sm me-5 mb-3 mt-2"
                                />
                            )}
                            {selectedProject.link !== "" ? (
                            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="hover:text-myblue-500">{selectedProject.linkText}</a>
                            ) : (
                            <span>{selectedProject.linkText}</span>
                            )
                            }
                        </div>
                    </div>
                )}        
        </>
    )
}