import React, { useState } from 'react'

const NavBar = () => {
  const [hoveredButton, setHoveredButton] = useState('')

  return (
    <nav className="bg-slate-700 opacity-90 sticky drop-shadow-xl top-0 flex items-center h-12 w-full z-50">
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
            className={`px-3 py-2 font-bold text-xl text-neutral  hover:text-green ${
              hoveredButton && hoveredButton !== title
                ? 'blur-sm duration-500 ease-in-out'
                : ''
            }`}
            onMouseEnter={() => setHoveredButton(title)}
            onMouseLeave={() => setHoveredButton('')}
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
