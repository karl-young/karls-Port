const About = () => {
  return (
    <>
      <section className="px-20 flex justify-center items-center gap-3 py-52">
        <div className="absolute h-full w-80 z-40 ml-4 ">
          <img
            className="rounded-2xl md:block absolute  transform -translate-x-1/2 -translate-y-16  w-48 md:w-64 h-48 md:h-64  "
            src="client/styles/images/ME 2023.jpg"
            alt="Karl Young"
            id="me"
          />
        </div>
        <article className="p-32 w-full max-w-screen-md max-h-screen-md z-30 bg-slate-600 rounded-2xl ">
          <div className="">
            <div className="" id="about">
              <h1>Description</h1>
              <p>
                something about my experience as a web dev when shrunk all this
                moves to the right on top of a picture or something
              </p>
              <p>
                something about my experience as a web dev when shrunk all this
                moves to the right on top of a picture or something
              </p>
              <p>
                something about my experience as a web dev when shrunk all this
                moves to the right on top of a picture or something
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default About
