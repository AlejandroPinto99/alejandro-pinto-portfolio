import './App.css'

import Button from './components/Button/Button'

function App() {

  return (
    <div>
      <header>
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
      <div className="my-work">
        <h3>My Work</h3>
      </div>
    </div>
  )
}

export default App
