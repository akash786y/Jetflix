import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { VideoCartContext } from "./VideoCartContext";

function Navbar() {

    let { cart } = useContext(VideoCartContext);

    return (
        <>
            <div className='bg-red-600 p-3 text-black flex fixed w-screen top-0 z-50 items-center'>
                <div className='container mx-auto justify-between items-center'>
                    <a href="" className="text-4xl px-">Jetflix</a>
                </div>
                <div className="pr-2">
                    <ul className="flex p-3 font-medium space-x-4">
                        <li className="relative font-bold text-white">
                            <Link to="/watchlist">
                                Watchlist
                                {cart.length > 0 && (
                                    <span className="absolute -top-2 -right-3 bg-white text-red-600 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
                                        {cart.length}
                                    </span>
                                )}
                            </Link>
                        </li>
                        <li>
                            <Link to="/home">
                            <a href="">Home</a>
                            </Link>
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