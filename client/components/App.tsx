import Canvas from './Canvas'
import Canvas2 from './Canvas-2'
import Header from './Header'
import NavBar from './NavBar'
import Description from './Description'
import Tilt from './Tilt'

function App() {
  return (
    <>
      <section className="main-bg">
        <header>
          <Header />
          <div>
            <Canvas />
          </div>
        </header>
        <section>
          <NavBar />
          <section>
          
          <Description />
          </section>
        </section>
      </section>
      <Canvas2 />
    </>
  )
}

export default App
