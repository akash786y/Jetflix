import React, { createContext } from "react";
import { useState } from "react";
import data from '../data/data.json'

export const VideoCartContext = createContext();

export function VideoCartProvider({children}) {


    const [cart, setCart] = useState([]);

    function addToCart(videoName, videoUrl){
        setCart([...cart, {videoName, videoUrl}]);
    }

    function removeFromCart(video){
        console.log(video)
        console.log(cart)
        setCart([...cart.filter(v=>v.videoName!=video.videoName)])
    }

    return (

        <VideoCartContext.Provider value={{addToCart, removeFromCart, cart}}>
            {children}
        </VideoCartContext.Provider>

    )
}
