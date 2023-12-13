const Header = () => {
  return (
    <>
      <section className="relative self-center flex flex-col justify-center item-center w-fit h-screen ml-auto mr-auto  z-20   ">
        <div className="text-8xl font-Helvetica underline text-neutral aniRight">
          <h1>
            Hello, I&apos;m <span className="text-green">Karl</span>.
          </h1>
        </div>
        <div className="text-4xl font-Helvetica underline text-neutral aniLeft">
          <p>{"I'm a web developer"}</p>
        </div>
        <div className="text-4xl font-Helvetica underline relative flex justify-center mt-10 py-3 px-12 h-16  border-solid b">
          <a
            href="#about"
            className="text-neutral  
          hover:text-green aniBottom"
          >
            Click Me
          </a>
        </div>
      </section>
    </>
  )
}

export default Header
