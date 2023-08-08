import React from 'react'
import background from './alanced-bg.png'
import Navbar from './Navbar'

const Background = () => {
  return (
    <div className="h-screen bg-center bg-cover" style={{ backgroundImage: `url(${background})` }}>
        <Navbar/>
    </div>
  )
}

export default Background
