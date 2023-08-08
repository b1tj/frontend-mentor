import './App.css'
import imgUrl from './assets/images/image-qr-code.png'

export function App() {
  return (
    <div class="container">
      <div className="img">
        <img src={imgUrl} alt="alt" />
      </div>
      <div className="description">
        <h2 className="header">
          Improve your front-end skills by building projects
        </h2>
        <div className="detail">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </div>
        <div class="attribution">
          Challenge by{' R1o the dev '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">R1o</a>.
        </div>
      </div>
    </div>
  )
}
export default App
