import { useState } from 'react'
import '../App.css'
import '../index.css'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Trending from '../components/Trending'
import Footer from '../components/Footer'

function Home() {

  return (
    <>
      <div className='bg-black'>
        <Navbar />
        <Hero />
        <Trending />
        <Footer />
      </div>
    </>
  )
}

export default Home;
