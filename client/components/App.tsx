import Canvas from './Canvas'
import Canvas2 from './Canvas-2'
import Header from './Header'
import NavBar from './NavBar'
import Description from './Description'
import Tilt from './Tilt'

function App() {
  return (
    <>
      <div>
        <section>
          <header>
            <Header />
            <Canvas />
          </header>
        </section>
        <section>
          <NavBar />
          <Description />
        </section>
        <Canvas2 />
      </div>
    </>
  )
}

export default App
