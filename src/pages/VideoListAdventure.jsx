import React from "react";
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
        if (adventureCards.length == 20)
            break;
    }

    return (
        <>
            <div className="bg-black">
                <Navbar />

                <div className="mt-16 text-white">
                    <h1 className="pt-4 pb-4 font-bold text-3xl mt-22 pt-8 pl-4">Adventure Movies</h1>
                    <div className="flex flex-wrap justify-around">
                        {adventureCards}
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default VideoListAdventure;