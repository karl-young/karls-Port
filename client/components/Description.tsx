const Description = () => {
  return (
    <section className="relative h-screen px-10 flex justify-center items-center gap-3 py-52">
      <div id="image-description-container">
        <div className="w-80 absolute left-20  z-20">
          <img
            className="rounded-full w-full h-auto lg:rounded-2xl md:rounded-xl sm:rounded-full"
            src="client/styles/images/ME 2023.jpg"
            alt="Karl Young"
            id="me"
          />
        </div>
        <article
          id="about"
          className="p-8 max-w-screen-md bg-slate-600 rounded-2xl relative z-10
        lg:p-16 md:p-12 sm:p-8"
        >
          <div>
            <h1>Description</h1>/
            <p>
              Something about my experience as a web dev when shrunk all this
              moves to the right on top of a picture or something
            </p>
            <p>
              Something about my experience as a web dev when shrunk all this
              moves to the right on top of a picture or something
            </p>
            <p>
              Something about my experience as a web dev when shrunk all this
              moves to the right on top of a picture or something
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Description
