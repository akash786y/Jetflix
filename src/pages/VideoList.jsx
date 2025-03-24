import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from '../data/data.json'
import Card from "../components/Card";

function VideoList({category}) {

    let thrillCards = []
    for (let movie of data) {
        if (movie.genres.includes({category}) || movie.genres.includes('Thriller')) {
            thrillCards.push(<Card url={movie.thumbnail} mName={movie.title} />);
        }
        if (thrillCards.length == 20)
            break;
    }

    return (
        <>
            <div className="bg-black">
                <Navbar />

                <div className="mt-16 text-white">
                    <h1 className="pt-4 pb-4 font-bold">Thriller Movies</h1>
                    <div className="flex flex-wrap justify-between">
                        {thrillCards}
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default VideoList;