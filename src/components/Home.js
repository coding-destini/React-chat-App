import React from 'react'
import Navbar from './Navbar'
import Chats from './Chats'
import Chat from './Chat'
import Profile from './Profile'

const Home = () => {
  return (
    <div className='app'>
    <Navbar/>
    <div className='wrapper'>
        <Chats/>
        <Chat/>
        <Profile/>
    </div>
    </div>
  )
}

export default Home