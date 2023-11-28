import About from './About'
import Background from './Canvas'
import Header from './Header'
import NavBar from './NavBar'

function App() {
  return (
    <>
      <section className="main-bg">
        <header>
          <Header />
          <Background />
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
