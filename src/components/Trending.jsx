import React, { useRef } from "react";
import Card from "./Card";
import { ChevronLeft, ChevronRight } from 'react-feather'
import comedyData from '../data/comedyData.json'
import adventureData from '../data/adventureData.json'
import data from '../data/data.json'
import { Link } from "react-router-dom";

function Trending() {

    const navRef = useRef();
    const navRef2 = useRef();
    const navRef3 = useRef();

    const handleNav = (direction, ind) => {
        if (direction === 'left') {
            if (ind == 1) {
                navRef ? (navRef.current.scrollLeft += 200) : null;
            }
            else if (ind == 2) {
                navRef2 ? (navRef2.current.scrollLeft += 200) : null;
            }
            else if (ind == 3) {
                navRef3 ? (navRef3.current.scrollLeft += 200) : null;
            }
        }
        else {
            if (ind == 1) {
                navRef ? (navRef.current.scrollLeft -= 200) : null;
            }
            else if (ind == 2) {
                navRef2 ? (navRef2.current.scrollLeft -= 200) : null;
            }
            else if (ind == 3) {
                navRef3 ? (navRef3.current.scrollLeft -= 200) : null;
            }
        }
    }

    // let adventureCards = adventureData.map((cardVal) => {
    //     return <Card url={cardVal.url} />
    // })

    // let adventureC = data.filter((mData)=>{
    //     if(mData.genres.includes('adventure') || mData.genres.includes('Adventure')){
    //         return <Card url={mData.thumbnail}/>
    //     }
    // })

    let adventureCards = []
    for (let movie of data) {
        if (movie.genres.includes('adventure') || movie.genres.includes('Adventure')) {
            adventureCards.push(<Card url={movie.thumbnail} mName={movie.title} />);
        }
        if (adventureCards.length == 8)
            break;
    }

    let comedyCards = []
    for (let movie of data) {
        if (movie.genres.includes('comedy') || movie.genres.includes('Comedy')) {
            comedyCards.push(<Card url={movie.thumbnail} mName={movie.title} />);
        }
        if (comedyCards.length == 8)
            break;
    }

    let thrillCards = []
    for (let movie of data) {
        if (movie.genres.includes('thriller') || movie.genres.includes('Thriller')) {
            thrillCards.push(<Card url={movie.thumbnail} mName={movie.title} />);
        }
        if (thrillCards.length == 8)
            break;
    }


    // let comedyCards = comedyData.map((cardVal) => {
    //     return <Card url={cardVal.url} />
    // })

    // let thrillCards = comedyData.map((cardVal) => {
    //     return <Card url={cardVal.url} />
    // })


    return (
        <>
            <div className="ml-2">
                <div className="my-2 relative">
                    <div className="flex justify-between mr-2">
                    <p className="font-bold text-white text-xl">Adventure</p>

                    <Link to="/videoList">
                    <p className="text-white text-xl hover:font-bold">View All</p>
                    </Link>
                    </div>
                    <button onClick={() => handleNav('left', 1)} className="absolute right-0 top-1/2 transform z-40 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition">
                        <ChevronRight size={24} />
                    </button>
                    <div className="flex flex-no-wrap overflow-hidden" ref={navRef}>
                        {adventureCards}
                    </div>
                    <button onClick={() => handleNav('right', 1)} className="absolute left-0 top-1/2 transform z-40 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition">
                        <ChevronLeft size={24} />
                    </button>
                </div>
                <div className="my-2 relative">
                    <p className="font-bold text-white text-xl">Comedy</p>
                    <button onClick={() => handleNav('left', 2)} className="absolute right-0 top-1/2 transform z-40 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition">
                        <ChevronRight />
                    </button>
                    <div className="flex flex-no-wrap overflow-hidden" ref={navRef2}>
                        {comedyCards}
                    </div>
                    <button onClick={() => handleNav('right', 2)} className="absolute left-0 top-1/2 transform z-40 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition">
                        <ChevronLeft />
                    </button>
                </div>
                <div className="my-2 relative">
                    <p className="font-bold text-white text-xl">Thrill</p>
                    <button onClick={() => handleNav('left', 3)} className="absolute right-0 top-1/2 transform z-40 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition">
                        <ChevronRight />
                    </button>
                    <div className="flex flex-no-wrap overflow-hidden" ref={navRef3}>
                        {thrillCards}
                    </div>
                    <button onClick={() => handleNav('right', 3)} className="absolute left-0 top-1/2 transform z-40 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition">
                        <ChevronLeft />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Trending