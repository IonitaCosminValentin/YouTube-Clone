import React from 'react'
import Logo from './Assets/Logo.svg'
import { BsMoon, BsBell } from 'react-icons/bs'
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoPersonCircleSharp } from 'react-icons/io5'
function SearchBar ({
  openSidebar,
  darkMode
}: {
  openSidebar: VoidFunction
  darkMode: VoidFunction
}) {
  return (
    <div className='search-bar'>
      <div className='left-side'>
        <span
          className='hamburger-container'
          onClick={() => {
            openSidebar()
          }}
        >
          <RxHamburgerMenu className='hamburger' />
        </span>
        <img src={Logo} alt='Logo' className='logo' />
      </div>
      <div className='search-form'>
        <input type='text' className='search' placeholder='Search' />
        <button className='search-button'>
          <i className='fa-solid fa-magnifying-glass fa-lg'></i>
        </button>
        <i className='fa-solid fa-microphone fa-xl mic'></i>
      </div>
      <div className='right-side'>
        <span
          className='container moon-container'
          onClick={() => {
            darkMode()
          }}
        >
          <BsMoon className='icons ' />
        </span>
        <span className='container'>
          <AiOutlineVideoCameraAdd className='icons' />
        </span>
        <span className='container'>
          <BsBell className='icons' />
        </span>
        <span className='container user-container'>
          <IoPersonCircleSharp className='icons user' />
        </span>
      </div>
    </div>
  )
}

export default SearchBar
