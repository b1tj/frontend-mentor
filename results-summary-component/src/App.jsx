import './App.scss'
import ReactionIcon from './assets/images/icon-reaction.svg'
import MemoryIcon from './assets/images/icon-memory.svg'
import VerbalIcon from './assets/images/icon-verbal.svg'
import VisualIcon from './assets/images/icon-visual.svg'

function App() {
  return (
    <section className="container">
      <div className="result-container">
        <p className="header">Your Result</p>
        <div className="result-circle">
          <p>76</p>
          <p>of 100</p>
        </div>
        <div className="evaluate">Great</div>
        <p className="detail">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>

      <div className="summary-container">
        <div className="header">Summary</div>
        <div className="item red">
          <div className="icon">
            <img src={ReactionIcon} alt="" />
            Reaction
          </div>
          <p className="score">
            80 <span>/ 100</span>
          </p>
        </div>
        <div className="item yellow">
          <div className="icon">
            <img src={MemoryIcon} alt="" />
            Memory
          </div>
          <p className="score">
            92 <span>/ 100</span>
          </p>
        </div>
        <div className="item green">
          <div className="icon">
            <img src={VerbalIcon} alt="" />
            Verbal
          </div>
          <p className="score">
            61 <span>/ 100</span>
          </p>
        </div>
        <div className="item blue">
          <div className="icon">
            <img src={VisualIcon} alt="" />
            Visual
          </div>
          <p className="score">
            72 <span>/ 100</span>
          </p>
        </div>
        <div className="btn">
          <p>Continue</p>
        </div>
      </div>
    </section>
  )
}

export default App
