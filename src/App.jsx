import { useState } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Watchlist from './pages/watchlist'
import Page1 from './pages/page1'
import { VideoCartProvider } from './components/VideoCartContext'
import Login from './pages/login'
import VideoList from './pages/VideoList'

function App() {

  return (
    <VideoCartProvider>
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/page1' element={<Page1 />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path='/' element={<Login />} />
          <Route path='/videoList' element={<VideoList />} />
        </Routes>
      </Router>
    </VideoCartProvider>
  )
}

export default App
