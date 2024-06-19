const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-dark text-neutral py-4">
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/karl-young"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="client/styles/images/icons8-github.svg"
              alt="Github"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/karl-young-4846602a4/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="client/styles/images/icons8-linkedin.svg"
              alt="LinkedIn"
              width={30}
              height={30}
            />
          </a>
        </div>
        <a
          href="Home"
          className="px-4 py-2 text-neutral-light hover:text-neutral-dark"
        >
          Back to top
        </a>
      </div>
      <p className="text-center text-neutral-light">
        Made with ❤️ in Otago, NZ. &copy; {currentYear} by Karl Young. All
        Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
