import { useState } from 'react'
import StarLogo from './assets/images/icon-star.svg'
import imgUrl from './assets/images/illustration-thank-you.svg'

function App() {
  const [active, setActive] = useState(-1)
  const [submit, setSubmit] = useState(false)

  return (
    <div className="max-[375px]:px-4 container h-screen flex justify-center items-center bg-background m-0">
      {submit === true ? (
        <SubmitCard active={active} />
      ) : (
        <RatingCard
          active={active}
          setActive={setActive}
          setSubmit={setSubmit}
        />
      )}
    </div>
  )
}

const RatingItem = ({ children, setActive, active }) => {
  return (
    <div
      onClick={setActive}
      className={`${
        active === true
          ? 'bg-light-grey text-white'
          : 'bg-dark-blue text-light-grey'
      } hover:bg-orange hover:text-white container cursor-pointer flex shadow-sm justify-center items-center rounded-full w-12 h-12  font-bold `}
    >
      <span>{children}</span>
    </div>
  )
}

const RatingCard = ({ active, setActive, setSubmit }) => {
  const rating = [1, 2, 3, 4, 5]

  return (
    <div className="container rounded-[30px] font-overpass flex flex-col gap-[14px] w-[400px] h-[400px] bg-gradient-to-b from-dark-blue to-very-dark-blue p-[28px]">
      <div className="container flex justify-center items-center rounded-full w-12 h-12 bg-gray-700/30">
        <img src={StarLogo} alt="Star Logo" />
      </div>
      <h2 className="text-white font-bold text-[25px] mt-3">How did we do?</h2>
      <p className="text-light-grey text-[15px]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between mt-3">
        {rating.map((item, index) => {
          return (
            <RatingItem
              key={index}
              active={active === index}
              setActive={() => setActive(index)}
            >
              {item}
            </RatingItem>
          )
        })}
      </div>
      <div
        onClick={() => setSubmit(true)}
        className="uppercase mt-4 container flex items-center justify-center rounded-full h-11 cursor-pointer bg-orange text-center text-white/80 hover:bg-white hover:text-orange tracking-widest "
      >
        <span>submit</span>
      </div>
    </div>
  )
}

const SubmitCard = ({ active }) => {
  return (
    <div className="container rounded-[30px] font-overpass flex flex-col items-center gap-[14px] w-[400px] h-[400px] bg-gradient-to-b from-dark-blue to-very-dark-blue p-[28px]">
      <div className="">
        <img src={imgUrl} alt="thank you" />
      </div>
      <div className="bg-gray-700/30 py-1 px-4 rounded-full flex items-center mt-4 ">
        <p className="text-orange/70 text-[15px]">
          You selected {active + 1} out of 5
        </p>
      </div>
      <h2 className=" text-3xl text-white mt-5">Thank you!</h2>
      <p className="text-light-grey text-[15px] text-center px-[2px]">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  )
}

export default App
