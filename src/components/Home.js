import React from 'react'
import Navbar from './Navbar/Navbar'
import Chats from './ChatList/Chats'
import Chat from './Chat/Chat'
import Profile from './Profile/Profile'

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