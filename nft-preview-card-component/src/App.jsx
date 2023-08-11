import imgUrl from './assets/images/image-equilibrium.jpg'
import avatarUrl from './assets/images/image-avatar.png'
import etheriumIcon from './assets/images/icon-ethereum.svg'
import clockIcon from './assets/images/icon-clock.svg'
import viewIcon from './assets/images/icon-view.svg'
import { twMerge } from 'tailwind-merge'

function App() {
  return (
    <div className=" container rounded-[12px] gap-[14px] p-5 font-outfit w-[300px] h-[500px] flex flex-col justify-center  bg-card">
      <div className="rounded-lg overflow-hidden cursor-pointer relative group flex items-center justify-center">
        <img className="w-full " src={imgUrl} alt="image equilibrium" />
        <div className="group-hover:bg-cyan opacity-60 container absolute w-full h-full"></div>
        <img
          className="hidden group-hover:block absolute"
          src={viewIcon}
          alt="icon"
        />
      </div>
      <h2 className="text-white/90 cursor-pointer font-semibold text-18px hover:text-cyan active:text-cyan">
        Equilibrium #3429
      </h2>
      <p className="text-[16px] text-soft-blue/80 ">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img className="w-2 h-4" src={etheriumIcon} alt="icon" />
          <p className="text-cyan text-[14px] font-medium">0.041 ETH</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={clockIcon} alt="icon" />
          <p className="text-soft-blue text-[14px]">3 days left</p>
        </div>
      </div>
      <div className="flex justify-between items-center border-t-[1px] border-line pt-3">
        <div className="bg-white w-[26px] h-[26px] rounded-full outline-1 outline outline-white">
          <img className="w-full h-full" src={avatarUrl} alt="icon" />
        </div>
        <p className="text-[16px] text-soft-blue mr-10">
          Creation of{' '}
          <span className="text-white/80 hover:text-cyan active:text-cyan cursor-pointer">
            Jules Wyvern
          </span>
        </p>
      </div>
    </div>
  )
}

export default App
