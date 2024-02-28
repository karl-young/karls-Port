const Description = () => {
  return (
    <section className="h-screen px-20 flex justify-center items-center gap-3 py-52">
      <div className="w-80">
        <img
          className="rounded-2xl w-full h-auto"
          src="client/styles/images/ME 2023.jpg"
          alt="Karl Young"
          id="me"
        />
      </div>
      <article
        id="about"
        className="p-8 max-w-screen-md bg-slate-600 rounded-2xl"
      >
        <div>
          <h1>Description</h1>
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
    </section>
  )
}

export default Description
