import '../App.css'
import '../index.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { VideoCartProvider, VideoCartContext } from '../components/VideoCartContext'
import { useContext } from 'react';
import Card from '../components/Card';

function Watchlist() {

    let { cart, removeFromCart } = useContext(VideoCartContext);

    return (
        <>
            <div className='bg-black min-h-screen'>
                <Navbar />
                <h1 className="text-center text-white mt-16 text-4xl font-extrabold tracking-wide py-8">
                    Watch List
                </h1>
                <div className='px-6'>
                    {cart.length === 0 ? (
                        <p className="text-center text-gray-400 text-lg">
                            No items in your watchlist.
                        </p>
                    ) : (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                            {cart.map((video, index) => (
                                <div key={index} className='relative group'>
                                    <Card mName={video.videoName} url={video.videoUrl} />
                                    <button 
                                        onClick={() => removeFromCart(video)}
                                        className='absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300'
                                    >
                                        Remove from Watchlist
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Watchlist;