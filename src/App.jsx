import { useState } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Watchlist from './pages/watchlist'
import Page1 from './pages/page1'
import { VideoCartProvider } from './components/VideoCartContext'
import Login from './pages/login'
import VideoListAdventure from './pages/VideoListAdventure'
import VideoListComedy from './pages/VideoListComedy'
import VideoListThril from './pages/VideoListThrill'

function App() {

  return (
    <VideoCartProvider>
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/page1' element={<Page1 />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path='/' element={<Login />} />
          <Route path='/videoListAdventure' element={<VideoListAdventure />} />
          <Route path='/videoListComedy' element={<VideoListComedy/>}/>
          <Route path='/videoListThrill' element={<VideoListThril/>}/>
        </Routes>
      </Router>
    </VideoCartProvider>
  )
}

export default App
