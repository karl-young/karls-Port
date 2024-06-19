import Canvas from './Canvas'
import Background from './BackCanvas'
import Header from './Header'
import NavBar from './NavBar'
import Description from './Description'
import Snow from './Snow'
import { useState } from 'react'
import Skills from './Skills'
import Projects from './Projects'

function App() {
  const [showCanvas, setShowCanvas] = useState(true)

  const toggleCanvas = () => {
    setShowCanvas(!showCanvas)
  }

  return (
    <>
      <div>
        <section id="home">
          <header>
            {showCanvas ? <Canvas /> : <Snow />}
            <div className="button-container">
              <button
                className={`button ${showCanvas ? '' : 'spin-animation'}`}
                onClick={toggleCanvas}
              >
                <div className="snowflake-container">
                  <div className="brackets ">{'<\u00A0'}</div>
                  <div className="snowflake"></div>
                  <div className="brackets ">{`\u00A0>`}</div>
                </div>
              </button>
            </div>
            <Header />
          </header>
        </section>
        <section>
          <NavBar />
          <section id="about">
            <Description />
            <Skills />
          </section>
          <section
            className="relative h-screen px-10 flex justify-center items-center gap-3 py-52"
            id="projects"
          >
            <Projects />
          </section>
        </section>

        <Background />
      </div>
    </>
  )
}

export default App
