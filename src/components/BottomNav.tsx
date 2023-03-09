import Home from './Assets/Home.svg'
import Shorts from './Assets/Shorts.svg'
import Subscriptions from './Assets/Subscriptions.svg'
import Library from './Assets/Library.svg'

const BottomNav = () => {
  return (
    <div className='bottom-nav'>
      <div>
        <img src={Home} alt='' />
        Home
      </div>
      <div>
        <img src={Shorts} alt='' />
        Shorts
      </div>
      <div>
        <img src={Subscriptions} alt='' />
        Subscriptions
      </div>
      <div>
        <img src={Library} alt='' />
        Library
      </div>
    </div>
  )
}

export default BottomNav
