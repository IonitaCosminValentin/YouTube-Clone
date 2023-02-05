import React from 'react'
import Home from './Assets/Home.svg'
import Shorts from './Assets/Shorts.svg'
import Subscriptions from './Assets/Subscriptions.svg'
import Library from './Assets/Library.svg'
import History from './Assets/History.svg'
import YourVideos from './Assets/YourVideos.svg'
import WatchLater from './Assets/WatchLater.svg'
import LikedVideos from './Assets/LikedVideos.svg'

function SideBar () {
  return (
    <div className='side-bar open'>
      <div className='highlight home'>
        <img src={Home} alt='' />
        <p>Home</p>
      </div>
      <div className='highlight invert'>
        <img src={Shorts} alt='' />
        <p>Shorts</p>
      </div>
      <div className='highlight invert'>
        <img src={Subscriptions} alt='' />
        <p>Subscriptions</p>
      </div>
      <span className='line' />
      <div className='highlight invert'>
        <img src={Library} alt='' />
        <p>Library</p>
      </div>
      <div className='highlight invert'>
        <img src={History} alt='' />
        <p>History</p>
      </div>
      <div className='highlight invert'>
        <img src={YourVideos} alt='' />
        <p>Your Videos</p>
      </div>
      <div className='highlight invert'>
        <img src={WatchLater} alt='' />
        <p>Watch Later</p>
      </div>
      <div className='highlight invert'>
        <img src={LikedVideos} alt='' />
        <p>Liked Videos</p>
      </div>
      <span className='line' />
      <p className='subscriptions'>Subscriptions</p>
      <div className='subscription'></div>
      <div className='closed hide'>
        <div className='highlight'>
          <img src={Home} alt='' />
          <p>Home</p>
        </div>
        <div className='highlight'>
          <img src={Shorts} alt='' />
          <p>Shorts</p>
        </div>
        <div className='highlight'>
          <img src={Subscriptions} alt='' />
          <p>Subscriptions</p>
        </div>

        <div className='highlight'>
          <img src={Library} alt='' />
          <p>Library</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
