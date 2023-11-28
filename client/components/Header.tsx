const Header = () => {
  return (
    <>
      <section className="flex flex-col w-fit h-screen ml-auto mr-auto  relative self-center items-center font-bold underline z-10 bg-sky">
        <div className="text-2xl font-bold text-neutral ">
          <h1>Hello, My name is <span className="text-blue">Karl</span></h1>
        </div>
        <div>
          <a href="#"className="text-neutral">Click Me</a>
        </div>
      </section>
    </>
  )
}

export default Header
