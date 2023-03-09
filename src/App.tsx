import './App.scss'
import { useEffect } from 'react'
import SearchBar from './components/SearchBar'
import SideBar from './components/SideBar'

import db from './components/DataBase'
import BottomNav from './components/BottomNav'

interface Sub {
  image: string
  name: string
}
interface Video {
  thumbnail: string
  title: string
  channelIcon: string
  channelName: string
  views: string
}

const addSub = (subs: Sub[]): void => {
  let subDiv = document.querySelector('.subscription')

  subs.forEach(sub => {
    let div = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')

    div.classList.add('highlight')
    div.classList.add('subs')
    img.setAttribute('src', sub.image)
    p.innerText = sub.name

    div.appendChild(img)
    div.appendChild(p)
    subDiv?.appendChild(div)
  })
}

const openSidebar = (): void => {
  const sideBar = document.querySelector('.side-bar')
  sideBar?.classList.toggle('open')
  const closedIcons = document.querySelector('.closed')
  closedIcons?.classList.toggle('hide')
}

const addVideos = (videos: Video[]): void => {
  const body = document.querySelector('.body')

  videos.forEach(video => {
    let div = document.createElement('div')
    let img = document.createElement('img')
    let wrapDiv = document.createElement('div')
    let channelImg = document.createElement('img')
    let p = document.createElement('p')
    let channelName = document.createElement('span')
    let views = document.createElement('span')

    div.classList.add('video-container')
    wrapDiv.classList.add('wrap-div')

    img.setAttribute('src', video.thumbnail)
    p.innerText = video.title

    channelImg.setAttribute('src', video.channelIcon)
    channelName.innerText = video.channelName
    views.innerText = video.views

    wrapDiv.appendChild(channelImg)
    div.appendChild(img)
    wrapDiv.appendChild(p)
    div.appendChild(wrapDiv)
    div.appendChild(channelName)
    div.appendChild(views)
    body?.appendChild(div)
  })
}

const toggleDarkMode = (): void => {
  let html = document.querySelector('html')
  html?.classList.toggle('Dark')
}
function App () {
  useEffect(() => {
    addSub(db.subs)
    addVideos(db.videos)
  }, [])

  return (
    <div className='App'>
      <SearchBar openSidebar={openSidebar} darkMode={toggleDarkMode} />
      <div className='body-container'>
        <SideBar />
        <div className='body'></div>
        <BottomNav />
      </div>
    </div>
  )
}

export default App
