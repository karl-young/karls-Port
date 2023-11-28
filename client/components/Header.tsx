const Header = () => {
  return (
    <>
      <section className="relative self-center flex flex-col justify-center item-center w-fit h-screen ml-auto mr-auto  z-20   ">
        <div className="text-4xl font-Helvetica underline text-neutral ">
          <h1>
            Hello, I&apos;m <span className="text-green">Karl</span>
          </h1>
        </div>
        <div className="text-4xl font-Helvetica underline text-neutral ">
          <p>{"I'm a junior web developer"}</p>
        </div>
        <div>
          <a href="#about" className="text-neutral hover:text-green">
            Click Me
          </a>
        </div>
      </section>
    </>
  )
}

export default Header
