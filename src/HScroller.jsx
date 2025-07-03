import { useEffect, useRef, useState } from "react";

export default function HScroller({ children, className }) {
    const scrollerRef = useRef(null);
    const [indicatorPosition, setIndicatorPosition] = useState(0);

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        const handleWheel = (e) => {
            if (scroller.scrollWidth > scroller.clientWidth) {
                e.preventDefault();
                scroller.scrollLeft += e.deltaY;
            }
        };

        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = scroller;
            const maxScrollLeft = scrollWidth - clientWidth;
            const progress = scrollLeft / maxScrollLeft;
            const trackWidth = clientWidth - 20;
            setIndicatorPosition(progress * trackWidth);
        }

        scroller.addEventListener("wheel", handleWheel, {passive: false});
        scroller.addEventListener("scroll", handleScroll);

        return () => {
            scroller.removeEventListener("wheel", handleWheel);
            scroller.removeEventListener("scroll", handleScroll)
        };
    }, []);

    return (
        <div className="w-full mt-2">
            {/* Progress Bar */}
            <div className="relative w-full h-2 bg-mywhite rounded overflow-hidden mb-2">
                <div
                    className="absolute top-0 left-0 h-2 bg-myblue-500 rounded transition-transform duration-200 ease-out"
                    style={{ width: '20px', transform: `translateX(${indicatorPosition}px)`}}
                />
            </div>

            <div className={className} ref={scrollerRef}>
                {children}
            </div>
        </div>
    );
}