import './App.scss'
import { useEffect } from 'react'
import SearchBar from './components/SearchBar'
import SideBar from './components/SideBar'
import Body from './components/Body'

import lofi from './components/Assets/lofi.jpg'
import quotes from './components/Assets/quotes.jpg'
import moshProgramming from './components/Assets/moshProgramming.jpg'
import sebastian from './components/Assets/sebastian.jpg'
import corridor from './components/Assets/corridor.jpg'
import dailyDoseOfInternet from './components/Assets/dailyDoseOfInternet.jpg'
import theActionLab from './components/Assets/theActionLab.jpg'
import leviAllen from './components/Assets/leviAllen.jpg'
import princeEa from './components/Assets/princeEa.jpg'
import neffex from './components/Assets/neffex.jpg'
import beAmazed from './components/Assets/beAmazed.jpg'
import harryMack from './components/Assets/harryMack.jpg'
import chrisRamsy from './components/Assets/chrisRamsy.jpg'
import theCodingTrain from './components/Assets/theCodingTrain.jpg'

interface Sub {
  image: string
  name: string
}
interface Video {
  thumbnail: string
  title: string
  channelIcon: string
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
    let wrapDiv = document.createElement('div')
    let img = document.createElement('img')
    let channelImg = document.createElement('img')
    let p = document.createElement('p')

    div.classList.add('video-container')
    wrapDiv.classList.add('wrap-div')

    img.setAttribute('src', video.thumbnail)
    channelImg.setAttribute('src', video.channelIcon)
    p.innerText = video.title

    wrapDiv.appendChild(channelImg)
    wrapDiv.appendChild(p)
    div.appendChild(img)
    div.appendChild(wrapDiv)
    body?.appendChild(div)
  })
}

const toggleDarkMode = (): void => {
  let html = document.querySelector('html')
  html?.classList.toggle('Dark')
}
function App () {
  useEffect(() => {
    let subs: Sub[] = [
      { image: lofi, name: 'Lofi Girl ' },
      { image: quotes, name: 'Quotes' },
      { image: moshProgramming, name: 'Programming with Mosh' },
      { image: sebastian, name: 'Sebastian Lague' },
      { image: corridor, name: 'Corridor Crew' },
      { image: dailyDoseOfInternet, name: 'Daily Dose Of Internet' },
      { image: theActionLab, name: 'The Action Lab ' },
      { image: leviAllen, name: 'Levi Allen' },
      { image: princeEa, name: 'Prince Ea' },
      { image: neffex, name: 'NEFFEX' },
      { image: harryMack, name: 'Harry Mack' },
      { image: beAmazed, name: 'BE AMAZED' },
      { image: chrisRamsy, name: 'Chris Ramsay' },
      { image: theCodingTrain, name: 'The Coding Train' }
    ]

    let videos: Video[] = [
      {
        thumbnail:
          'https://i.ytimg.com/vi/sTeoEFzVNSc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGr0V2eRDfJQ730GYMWjYQAzbs6g',
        title:
          'ChatGPT Tutorial for Developers - 38 Ways to 10x Your Productivity',
        channelIcon: moshProgramming
      },
      {
        thumbnail:
          'https://i.ytimg.com/vi/TjpakH79qjg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEkk4ple173niCQ6RCHWYRnvEgvQ',
        title: 'Remaking My Most Popular Edit... 2 Years Later',
        channelIcon:
          'https://yt3.ggpht.com/tWGVfHXn5SaAsw-7livA-p-Db6VrWKtLESCqIaR0Gw6cMN47dhUWt3nMPYcoF7ueZBDsUq4atg=s68-c-k-c0x00ffffff-no-rj'
      },
      {
        thumbnail:
          'https://i.ytimg.com/vi/_3cNcmli6xQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCy3qvqGi5I2UjlPUqRzUdkNkPDzg',
        title: 'Experimenting with Buses and Three-State Logic',
        channelIcon: sebastian
      },
      {
        thumbnail:
          'https://i.ytimg.com/vi/lzbpEo5b1lI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAl00A3FgiVL44CRXX-WwDwTxrRIg',
        title: 'Ferrofluid Could Be The Future of Space Propulsion',
        channelIcon: theActionLab
      },
      {
        thumbnail:
          'https://i.ytimg.com/vi/vBSXqHQadWA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxjOxDQEpnTV-SYIGQ9UgXKbCDkg',
        title:
          'They Had To See This | Harry Mack Guerrilla Bars 30 London Pt. 2',
        channelIcon: harryMack
      },
      {
        thumbnail:
          'https://i.ytimg.com/vi/swcvNXdp38c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCinlFASkE41ogt8RjYRD6ynacGnw',
        title: 'The ANTI GRAVITY Puzzle!!',
        channelIcon: chrisRamsy
      },
      {
        thumbnail:
          'https://i.ytimg.com/vi/PHfKCxjsmos/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGF-z3yAkqdgCfB8wdM8rFDXLOQg',
        title: 'Coding Challenge: 3D on Apple II',
        channelIcon: theCodingTrain
      },
      {
        thumbnail:
          'https://i.ytimg.com/vi/Pq7ppv0lDCU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLRSDRL4EhPNOVQ_eKpVAwz1TxrQ',
        title: 'VFX Artists React 93: Star Wars X-Wing, The Polar Express',
        channelIcon: corridor
      },
      {
        thumbnail:
          'https://i.ytimg.com/vi/um9pLyoMuvU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARFwnW3pl9wx4fa8P2CpJALY6POw',
        title: 'Solo Winter Camping in My CAR through Freezing Temps',
        channelIcon: leviAllen
      },
      {
        thumbnail:
          'https://i.ytimg.com/vi/D25QHmjrnU0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChqg8g-QnZtLfxnCzBvEz9h9l5-g',
        title: 'DEPRESSION (BEHIND THE SCENES)',
        channelIcon: princeEa
      },
      {
        thumbnail:
          'https://i.ytimg.com/vi/jfKfPfyJRdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAP74LKwgeVlcaO8dzN4FJFRwTVw',
        title: 'lofi hip hop radio - beats to relax/study to',
        channelIcon: lofi
      },
      {
        thumbnail:
          'https://i.ytimg.com/vi/Ew_rU5Xmalg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCf2GMP_YfpGED0IPQMYdVfhgX5iA',
        title: 'Revolutionary Space Technologies and Innovations',
        channelIcon: beAmazed
      }
    ]

    addSub(subs)
    addVideos(videos)
  }, [])

  return (
    <div className='App'>
      <SearchBar openSidebar={openSidebar} darkMode={toggleDarkMode} />
      <div className='body-container'>
        <SideBar />
        <Body />
      </div>
    </div>
  )
}

export default App
