import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className='bg-red-600 p-3 text-black flex fixed w-screen top-0 z-50 items-center'>
                <div className='container mx-auto justify-between items-center'>
                    <a href="" className="text-4xl px-">Jetflix</a>
                </div>
                <div className="pr-2">
                    <ul className="flex p-3 font-medium space-x-4">
                        <li className="font-bold text-white">
                            <Link to="/watchlist">
                                Watchlist
                            </Link>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar