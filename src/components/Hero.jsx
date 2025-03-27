import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

function Hero() {
    let v = [
        "https://images.zoomnews.com/thumb/msid-151113563,width-1280,height-720,resizemode-75/151113563.jpg",
        "https://images.herzindagi.info/her-zindagi-english/images/2024/12/10/article/image/Main-(98)-1733822862355.jpg",
        "https://legacy.asset.viewlift.com/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2024/11/23/1732367166219_16x9_11_1_16x9Images.jpg?impolicy=resize&w=750&h=379.8",
    ];

    const [imgIndex, setImg] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    function nextImg() {
        setImg((imgIndex + 1) % v.length);
    }

    function prevImg() {
        setImg((imgIndex - 1 + v.length) % v.length);
    }

    const observerRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.intersectionRatio < 0.1)
            },
            { threshold: 0.2 } // Adjust when to trigger (20% visible)
        );
        if (observerRef.current) observer.observe(observerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const interval = setInterval(nextImg, 3000);
        return () => clearInterval(interval); // Cleanup interval
    }, [imgIndex]);

    return (
        <>
            <div className={`top-0 left-0 w-full h-[800px] transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="relative w-full max-h-[800px]">
                    <img
                        className="w-full h-[800px] object-cover duration-500 z-"
                        src={v[imgIndex]}
                        alt="Img"
                    />



                    {/* Overlay & Text */}
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-white text-5xl font-extrabold drop-shadow-lg">
                            Welcome to Jetflix
                        </h1>
                        <p className="text-gray-300 mt-2 text-lg max-w-xl">
                            Explore the best movies and TV shows available now.
                        </p>
                    </div>


                    {/* Left Button */}
                    <button
                        onClick={prevImg}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
                    >
                        <ChevronLeft />
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={nextImg}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
                    >
                        <ChevronRight />
                    </button>

                    {/* Dots for Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {v.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-3 w-3 rounded-full transition-all duration-300 ${idx === imgIndex ? "bg-white" : "bg-gray-500"
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
            <div ref={observerRef} className="h-[1px] w-full"></div>
        </>
    );
}

export default Hero;