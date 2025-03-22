import '../App.css'
import '../index.css'
import Navbar from '../components/Navbar'
import YouTube from 'react-youtube'
import Footer from '../components/Footer'

function page1() {

  const options = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  return (
    <>
      <div className='bg-black'>
        <Navbar />
        {/* <div className='w-full mx-auto flex center my-2 mt-24'>
        <div className='mt-24 w-full my-2 h-full'>
          <video controls autoPlay>
          <source src='../assets/Car Crash America USA 2017 Full HD.mp4' type="video/mp4" />
        </video>

          <YouTube videoId="-_PpxVu_zhM" options={options} />
        </div>
      </div> */}

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
          <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 mt-24">
            <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
              Watch This Video
            </h1>
            <div className="flex justify-center">
              <YouTube videoId="-_PpxVu_zhM" opts={options} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default page1;
