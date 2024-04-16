import Canvas from './Canvas'
import Canvas2 from './Canvas-2'
import Header from './Header'
import NavBar from './NavBar'
import Description from './Description'
import Snow from './Snow'
import { useState } from 'react'
import Skills from './Skills'

function App() {
  const [showCanvas, setShowCanvas] = useState(true)

  const toggleCanvas = () => {
    setShowCanvas(!showCanvas)
  }

  
  return (
    <>
      <div>
        <section>
          <header>
            <Header />
            {showCanvas ? <Canvas /> : <Snow />}
            <div className="button-container">
              <button
                className={`button ${showCanvas ? '' : 'spin-animation'}`}
                onClick={toggleCanvas}
              >
                <div className="snowflake-container">
                  <div className="brackets">{'<\u00A0'}</div>
                  <div className="snowflake" />
                  <div className="brackets">{`\u00A0>`}</div>
                </div>
              </button>
            </div>
          </header>
        </section>
        <section>
          <NavBar />
          <Description />
        </section>
        <section>
          <Skills />
        </section>
        <Canvas2 />
      </div>
    </>
  )
}

export default App
