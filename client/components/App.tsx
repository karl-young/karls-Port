import About from './About'
import Background from './Canvas'
import CanvasAnimation from './Canvas2'
import Header from './Header'
import NavBar from './NavBar'

function App() {
  return (
    <>
      <section className="main-bg">
        <header>
          <Header />
          <canvas id="canvas"  ></canvas>
        </header>
        <section>
          <NavBar />
          <About />
        </section>
      </section>
    </>
  )
}

export default App
