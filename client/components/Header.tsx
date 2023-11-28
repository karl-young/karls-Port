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
          <a href="#about" className="text-neutral
          hover:border-solid hover:border hover:border-slate-500 hover:transition hover:text-green ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 duration-300 ">
            Click Me
          </a>
        </div>
      </section>
    </>
  )
}

export default Header
