export default function Footer() {
    return (
        <footer className='absolute inset-x-0 bottom-0 text-center text-[0.75rem] m-5'>
            <span className='inline-flex items-center gap-1'>
                Barcelona, 2025 | Built with React 
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                    <img className='w-3 brightness-200 hover:brightness-100 transition' src='/assets/react_light.svg' alt="React logo" />
                </a>
            </span>
        </footer>
    )
}