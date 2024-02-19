const Header = () => {
  return (
    <>
      <section className="relative self-center flex flex-col justify-center item-center w-fit h-screen ml-auto mr-auto z-20 ">
        <div
          className="font-Helvetica  text-neutral fromRight transition-all  duration-400 ease-in-out text-4xl pb-0
        lg:text-7xl md:text-6xl sm:text-5xl 
        lg:pb-2  md:pb-1 sm:pb-0"
        >
          <h1>
            Hello, I&apos;m <span className="text-green">Karl</span>&#8228;
          </h1>
        </div>
        <div
          className=" font-Helvetica  text-neutral fromLeft transition-all  duration-300 ease-in-out
        lg:text-4xl md:text-3xl sm:text-2xl
        lg:pb-2  md:pb-1 sm:pb-0"
        >
          <p>{"I'm a full stack web developer"}</p>
        </div>
        <div
          className="font-Helvetica fromBottom flex justify-center mt-0 py-1 px-14 h-6 
        lg:text-3xl lg:py-3 lg:h-16 
        md:text-2xl md:py-2 md:h-14 
        sm:text-sm sm:py-1 sm:h-6"
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
