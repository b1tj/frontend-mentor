import heroImg from './assets/images/illustration-hero.svg'
import musicIcon from './assets/images/icon-music.svg'

function App() {
  return (
    <section className="container max-[375px]:w-full max-[375px]:h-full font-red-hat-display w-[400px] h-[600px] bg-white rounded-2xl overflow-hidden ">
      <img className="w-full" src={heroImg} alt="" />
      <div className="flex  flex-col items-center justify-between px-10 gap-6 max-[375px]:px-5">
        <h2 className="font-[900] text-[28px] text-dark-blue mt-5">
          Order Summary
        </h2>
        <p className="text-center max-[375px]:p-none max-[375px]:-mt-6 text-[16px] text-desaturated-blue px-3 font-medium -mt-4x">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <section className="container w-full bg-very-pale-blue rounded-lg flex justify-between items-center p-5">
          <img src={musicIcon} alt="" />
          <div className="ml-4">
            <p className="font-bold text-[18px] text-dark-blue">Annual Plan</p>
            <p className="text-desaturated-blue">$55.99/year</p>
          </div>
          <a
            href="#"
            className="text-bright-blue flex-1 text-right underline font-bold text-[14px]"
          >
            Change
          </a>
        </section>
        <a className="container cursor-pointer shadow-[0_13px_15px_rgba(56,41,224,.2)] w-full h-[40px] bg-bright-blue text-white text-center leading-[40px] rounded-xl">
          Proceed to Payment
        </a>
        <button className="text-desaturated-blue text-[14px] font-bold max-[375px]:pb-6">
          Cancel Order
        </button>
      </div>
    </section>
  )
}

export default App
