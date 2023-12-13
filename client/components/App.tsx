import About from './About'
import Canvas from './Canvas'
import Canvas2 from './Canvas-2'

import Header from './Header'
import NavBar from './NavBar'

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
          <About />
        </section>
      </section>
      <Canvas2 />
    </>
  )
}

export default App
