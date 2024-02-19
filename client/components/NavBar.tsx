const NavBar = () => {
  return (
    <nav className="bg-slate-700 opacity-90 sticky drop-shadow-xl top-0 flex items-center h-12 w-screen z-50">
  <nav className="flex flex-grow justify-end space-x-4">
        {[
          ['Home', '/dashboard'],
          ['About', '/About'],
          ['Projects', '/projects'],
          ['Contact', '/Contact'],
        ].map(([title, url]) => (
          <a
            key={url}
            href={url}
            className="rounded-lg  px-3 py-2 text-natural font-medium text-neutral hover:text-green"
            aria-current={window.location.pathname === url ? 'page' : undefined}
          >
            {title}
          </a>
        ))}
      </nav>
    </nav>
  )
}

export default NavBar
