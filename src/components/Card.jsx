import React, { useContext } from "react";
import { Play } from 'react-feather'
import { Link } from 'react-router-dom'
import {VideoCartContext} from './VideoCartContext'

function Card(props) {

    let {cart, addToCart} = useContext(VideoCartContext);

    return (
        <>
            {/* <Link to="/page1"> */}
            <div className="group relative rounded-lg transition-all px-3 py-3 shadow-lg hover:scale-105 duration:300">
                <div className="max-w-sm min-w-60 max-h-64 rounded overflow-hidden mx-2 duration-300">
                    <img className="w-full h-full object-cover group-hover:scale-110 duration:300 transition-transform" src={props.url} alt="Img" />
                    <div className="inset-0 absolute bg-black bg-opacity-60 opacity-0 flex flex-col justify-center items-center text-white group-hover:opacity-100 transition-opacity">
                        <p className="text-lg font-bold">{props.mName}</p>
                        <div>
                        <div className="mt-3">
                            <Link to="/page1" className="flex gap-2 bg-red-600 rounded-md items-center px-4 py-2 hover:bg-red-700 transition">
                                <Play size={20}/> 
                                <p className="text-sm">Watch Now</p>
                            </Link>
                        </div>
                        <div className="mt-2">
                            <button onClick={()=>{addToCart(props.mName,props.url)}}  className="text-sm hover:underline" href="https://www.imdb.com/title/tt0848228/">
                                +Add to Watch Later
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </>
    )
}

export default Card

