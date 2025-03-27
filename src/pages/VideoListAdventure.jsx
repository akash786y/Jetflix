import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from '../data/data.json'
import Card from "../components/Card";

function VideoListAdventure() {

    let adventureCards = []
    for (let movie of data) {
        if (movie.genres.includes('adventure') || movie.genres.includes('Adventure')) {
            adventureCards.push(<Card url={movie.thumbnail} mName={movie.title} />);
        }
        if (adventureCards.length == 35)
            break;
    }


    const observerRef = useRef(null);
    const [items, setItems] = useState(adventureCards.slice(0, 15));
    const [index, setIndex] = useState(15);


    const loadMore = () => {
        setItems([...items, ...adventureCards.splice(index, index + 15)])
        setIndex((index + 15) % adventureCards.length)
    }


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setTimeout(()=>{loadMore()}, 300);
                }
            },
            { threshold: 1.0 }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => observer.disconnect(); 
    });


    return (
        <>
            <div className="bg-black">
                <Navbar />

                <div className="mt-16 text-white">
                    <h1 className="pt-4 pb-4 font-bold text-3xl mt-22 pt-8 pl-4">Adventure Movies</h1>
                    <div>
                        <div className="flex flex-wrap justify-around">
                            {items}
                        </div>
                        {/* <div className="text-white">
                            Loading more...
                        </div> */}
                        <div className="text-white font-bold" ref={observerRef}>
                            Loading more...
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default VideoListAdventure;