import './App.css'

import Button from './components/Common/Button'

function App() {

  return (
    <div>
      <header>
        <nav>
            <a>
              Home
            </a>
            <a>
              Technologies
            </a>
            <a>
              Projects
            </a>
        </nav>
        <div>
          <div className="profile-picture">
            <img src="./pp.png" alt="profile picture Alejandro Pinto"/>
            <h3>Alejandro Pinto</h3>
            <p>Frontend Developer</p>
            <a href="/Alejandro-Pinto-CV.pdf" download="Alejandro-Pinto-CV.pdf">
              <Button
                label="Download CV"
                onClick={() => {}}
                type="button"
                variant='primary'
              />
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
