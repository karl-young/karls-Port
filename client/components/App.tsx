import Canvas from './Canvas'
import Canvas2 from './Canvas-2'
import Header from './Header'
import NavBar from './NavBar'
import Discription from './Discription'

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
          <Discription />
        </section>
      </section>
      <Canvas2 />
    </>
  )
}

export default App
