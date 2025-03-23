import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from '../data/data.json'
import Card from "../components/Card";

function VideoList(props) {

    let thrillCards = []
    for (let movie of data) {
        if (movie.genres.includes('thriller') || movie.genres.includes('Thriller')) {
            thrillCards.push(<Card url={movie.thumbnail} mName={movie.title} />);
        }
        if (thrillCards.length == 8)
            break;
    }

    return (
        <>
            <div className="bg-black">
                <Navbar />

                <div className="mt-16">
                    <div className="flex flex-wrap">
                        {thrillCards}
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default VideoList;