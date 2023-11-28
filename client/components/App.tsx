import Background from "./Canvas"
import Header from "./Header"
import NavBar from "./NavBar"

function App() {
  return (
    <>
      <header >
        <Header />
        <Background  />
      </header>
      <section>
        <NavBar />

      </section>
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
