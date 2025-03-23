import React, { useState } from "react";
import {ChevronLeft, ChevronRight} from 'react-feather';

function Hero(){

    let v=[
        'https://images.zoomnews.com/thumb/msid-151113563,width-1280,height-720,resizemode-75/151113563.jpg',
        'https://images.herzindagi.info/her-zindagi-english/images/2024/12/10/article/image/Main-(98)-1733822862355.jpg',
        'https://legacy.asset.viewlift.com/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2024/11/23/1732367166219_16x9_11_1_16x9Images.jpg?impolicy=resize&w=750&h=379.8',
    ]

    const [imgIndex, setImg] = useState(0)

    // const nextImg = () => {
    //     setImg((imgIndex+1)%v.length);
    //     console.log('hiihi');
    // }

    function nextImg(){
        // console.log(imgIndex)
        setImg((imgIndex+1)%v.length);
        // console.log(imgIndex)
    }
    function prevImg(){
        // console.log(imgIndex)
        setImg((imgIndex-1+v.length)%v.length);
        // console.log(imgIndex)
    }

    setInterval(nextImg, 5000);

    return (
        <>
            <div className="max-w-[1640px] mx-auto flex justify-center mt-16">
                <div className="max-h-[800px] relative">
                <img className="w-full mac-cover object-cover justify-center w-1640 h-[800px]" src={v[imgIndex]} alt="Img" />
                <button onClick={nextImg} type="button" className="text-white bg-gray px-5 py-2.5 rounded-full absolute top-1/2 left-0 hover:bg-black">
                    <ChevronLeft/>
                </button>

                <button onClick={prevImg} type="button" className="text-white bg-gray px-5 py-2.5 rounded-full absolute top-1/2 right-0 hover:bg-black">
                    <ChevronRight/>
                </button>
                </div>
            </div>
        </>
    )
}

export default Hero