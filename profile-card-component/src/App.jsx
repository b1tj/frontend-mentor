import victorImg from './assets/images/image-victor.jpg'
import bgTopImg from './assets/images/bg-pattern-top.svg'
import bgCardImg from './assets/images/bg-pattern-card.svg'
import bgBottomImg from './assets/images/bg-pattern-bottom.svg'

function App() {
  const data = [
    { number: '80K', title: 'Followers' },
    { number: '803K', title: 'Likes' },
    { number: '1.4K', title: 'Photos' },
  ]

  return (
    <div className="container overflow-hidden px-5 w-screen h-screen flex items-center justify-center relative">
      <div className="bg-white self-center z-50 font-kumbh-sans container w-[400px] h-[430px] flex gap-4 flex-col items-center rounded-2xl overflow-hidden">
        <img className="w-full h" src={bgCardImg} alt="" />
        <div className="container w-24 h-24 rounded-full overflow-hidden -mt-16 ring-[6px] ring-white">
          <img className="w-full h-full" src={victorImg} alt="" />
        </div>
        <p className="inline-block text-very-dark-blue font-bold text-18px mt-2">
          Victor Crest
          <span className="ml-2 text-dark-gray font-medium">26</span>
        </p>
        <p className="text-dark-grayrish-blue text-[15px] -mt-2 ">London</p>
        <div className="flex justify-evenly items-center w-full py-7 mt-[6px] border-t-[1px] border-dark-grayrish-blue">
          {data.map(({ number, title }, index) => {
            return (
              <div key={index} className="flex flex-col items-center font-bold">
                <p className=" text-[24px] text-very-dark-blue">{number}</p>
                <p className="text-[14px] text-dark-grayrish-blue">{title}</p>
              </div>
            )
          })}
        </div>
      </div>
      <img
        className="max-[375px]:top-[-16vh] max-[375px]:left-[-23vh] mx absolute top-[-70vh] left-[-16vw] -z-1"
        src={bgTopImg}
        alt=""
      />
      <img
        className="max-[375px]:bottom-[-15%] max-[375px]:right-[-48%] absolute bottom-[-85%] right-[-10%] -z-1"
        src={bgBottomImg}
        alt=""
      />
    </div>
  )
}

export default App
