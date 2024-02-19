const Header = () => {
  return (
    <>
      <section className="relative self-center flex flex-col justify-center item-center w-fit h-screen ml-auto mr-auto  z-20    ">
        <div
          className="font-Helvetica underline text-neutral fromRight transition-all  duration-400 ease-in-out text-4xl
        lg:text-8xl md:text-7xl sm:text-6xl "
        >
          <h1>
            Hello, I&apos;m <span className="text-green">Karl</span>.
          </h1>
        </div>
        <div
          className=" font-Helvetica underline text-neutral fromLeft transition-all  duration-300 ease-in-out
        lg:text-4xl md:text-3xl sm:text-2xl"
        >
          <p>{"I'm a full stack web developer"}</p>
        </div>
        <div
          className="font-Helvetica fromBottom  flex justify-center mt-0 py-1    px-14    h-8 
        lg:text-4xl lg:py-3 lg:h-16 
        md:text-3xl md:py-2 md:h-14 
        sm:text-lg sm:py-1 sm:h-10  "
        >
          <a
            href="#about"
            className="text-neutral flex justify-center items-center 
            border-solid border-inherit border-2 p-2  rounded-lg hover:-translate-y-1.5 hover:text-green transition-all  duration-400 ease-in-out"
          >
            View My Work &#x21E9;
          </a>
        </div>
      </section>
    </>
  )
}

export default Header
