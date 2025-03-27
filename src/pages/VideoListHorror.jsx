import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from '../data/data.json'
import Card from "../components/Card";

function VideoListHorror() {

    let horrorCards = []
    for (let movie of data) {
        if (movie.genres.includes('horror') || movie.genres.includes('Horror')) {
            horrorCards.push(<Card url={movie.thumbnail} mName={movie.title} />);
        }
        if (horrorCards.length == 35)
            break;
    }


    const observerRef = useRef(null);
    const [items, setItems] = useState(horrorCards.slice(0, 15));
    const [index, setIndex] = useState(15);


    const loadMore = () => {
        setItems([...items, ...horrorCards.splice(index, index + 15)])
        setIndex((index + 15) % horrorCards.length)
    }


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setTimeout(() => { loadMore() }, 300);
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
                    <h1 className="pt-4 pb-4 font-bold text-3xl mt-22 pt-8 pl-4">Horror Movies</h1>
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

export default VideoListHorror;