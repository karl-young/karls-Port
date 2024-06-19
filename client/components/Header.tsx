const Header = () => {
  return (
    <>
      <section className="no-select relative flex flex-col flex-nowrap  justify-center item-center w-fit h-screen ml-auto mr-auto z-20 min-w-fit">
        <div
          className="font-Helvetica  text-neutral fromRight self-center transition-all  duration-400 ease-in-out text-2xl pb-0
        lg:text-6xl md:text-5xl sm:text-2xl 
        lg:pb-2  md:pb-1 sm:pb-0"
        >
          <h1>
            Hello, I&apos;m <span className="text-green">Karl</span>&#8228;
          </h1>
        </div>
        <div
          className=" font-Helvetica  text-neutral fromLeft transition-all  duration-300 ease-in-out
        lg:text-5xl md:text-3xl sm:text-2xl
        lg:pb-2  md:pb-1 sm:pb-0"
        >
          <h2>I&apos;m a full stack web developer</h2>
        </div>
        <div
          className="font-Helvetica fromBottom flex justify-center mt-0 py-1 px-14 h-6 
        lg:text-3xl lg:py-3 lg:h-16 
        md:text-2xl md:py-2 md:h-14 
        sm:text-sm sm:py-1 sm:h-6"
        >
          <a
            href="#about"
            className=" smooth text-neutral flex justify-center items-center 
            border-solid border-inherit border-2 p-2  rounded-lg hover:-translate-y-1.5 hover:text-green"
          >
            View My Work &#x21E9;
          </a>
        </div>
      </section>
    </>
  )
}

export default Header
