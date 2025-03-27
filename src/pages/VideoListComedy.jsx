import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from '../data/data.json'
import Card from "../components/Card";
import { useRef, useEffect, useState } from "react";

function VideoListComedy() {

    let comedyCards = []
    for (let movie of data) {
        if (movie.genres.includes('comedy') || movie.genres.includes('Comedy')) {
            comedyCards.push(<Card url={movie.thumbnail} mName={movie.title} />);
        }
        if (comedyCards.length == 35)
            break;
    }


    const observerRef = useRef(null);
    const [items, setItems] = useState(comedyCards.slice(0, 15));
    const [index, setIndex] = useState(15);


    const loadMore = () => {
        setItems([...items, ...comedyCards.splice(index, index + 15)])
        setIndex((index + 15) % comedyCards.length)
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
                    <h1 className="pt-4 pb-4 font-bold text-3xl mt-22 pt-8 pl-4">Comedy Movies</h1>
                    <div>
                        <div className="flex flex-wrap justify-around">
                            {items}
                        </div>
                        <div className="text-white font-bold font-large" ref={observerRef}>
                            Loading more...
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default VideoListComedy;