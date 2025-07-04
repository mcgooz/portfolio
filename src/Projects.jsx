export default function Projects({title, featuredImage, onClick}) {
    return (
        <div className="flex-shrink-0 max-w-4xl w-full relative group transition-transform duration-1500 hover:scale-101 cursor-pointer text-center mt-2 me-3"
            onClick={onClick}
        >
            <img 
                src={featuredImage}
                alt={title}
                className="rounded-md group-hover:shadow-sm group-hover:blur-[2px] transition duration-1500 ease-in-out"
            />
            <h3 
                className="
                    absolute inset-0 flex items-center justify-center
                    text-white opacity-0
                    transition-opacity duration-500 ease-in-out
                    group-hover:opacity-100 
                "
            >
                <span 
                className="
                    bg-black/40
                    rounded-sm
                    px-4 py-2
                "       
            >
                {title}
                </span>
            </h3>
        </div>
    );
}