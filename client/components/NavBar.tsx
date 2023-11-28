const NavBar = () => {
  return (
    <>
      <nav className="bg-slate opacity-90 sticky top-0 flex h-10 item-center w-full ">
        <nav className="flex sm:justify-center space-x-4">
          {[
            ['Home', '/dashboard'],
            ['About', '/About'],
            ['Projects', '/projects'],
            ['Contact', '/Contact'],
          ].map(([title, url]) => (
            <a key={url}
              href={url}
              className="rounded-lg px-3 py-2 text-natural font-bold text-neutral hover:text-green"
            >
              {title}
            </a>
          ))}
        </nav>
      </nav>
    </>
  )
}

export default NavBar
