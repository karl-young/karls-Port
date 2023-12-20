const Header = () => {
  return (
    <>
      <section className="relative self-center flex flex-col justify-center item-center w-fit h-screen ml-auto mr-auto  z-20   ">
        <div className="text-8xl font-Helvetica underline text-neutral fromRight">
          <h1>
            Hello, I&apos;m <span className="text-green">Karl</span>.
          </h1>
        </div>
        <div className="text-4xl font-Helvetica underline text-neutral fromLeft">
          <p>{"I'm a web developer"}</p>
        </div>
        <div className="text-4xl font-Helvetica fromBottom  flex justify-center mt-1 py-3 px-12 h-16   ">
          <a
            href="#about"
            className="text-neutral flex justify-center items-center text-2xl
            border-solid border-inherit border-2 p-2  rounded-lg hover:-translate-y-1.5 hover:text-green transition-all  duration-500 ease-in-out"
          >
            View My Work &#x21E9;
          </a>
        </div>
      </section>
    </>
  )
}

export default Header
