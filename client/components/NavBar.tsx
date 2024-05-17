import { useState } from 'react'

const NavBar = () => {
  const [hoveredButton, setHoveredButton] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <nav className="bg-slate-700 opacity-90 sticky drop-shadow-xl top-0 flex items-center h-12 w-full z-50">
        <div className="flex flex-grow justify-end space-x-4">
          {[
            ['Home', '#home'],
            ['About Me', '#about'],
            ['Projects', '#projects'],
            ['Contact', '#contact'],
          ].map(([title, url]) => (
            <a
              key={url}
              href={url === '#contact' ? undefined : url}
              onClick={url === '#contact' ? toggleModal : undefined}
              className={`px-3 py-2 font-bold text-xl ${
                window.location.hash === url ? 'text-green' : 'text-neutral'
              } hover:text-green ${
                hoveredButton && hoveredButton !== title
                  ? 'duration-500 text-slate-700 ease-in-out'
                  : ''
              }`}
              onMouseEnter={() => setHoveredButton(title)}
              onMouseLeave={() => setHoveredButton('')}
              aria-current={window.location.hash === url ? 'page' : undefined}
            >
              {title}
            </a>
          ))}
        </div>
      </nav>

      {isModalOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Modal Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50"></div>

          {/* Modal Container */}
          <div className="bg-slate-700 rounded-lg p-4 transform transition-transform duration-500 ease-in-out translate-y-16 opacity-0 animate-showModal">
            <div className="flex justify-end">
              <button
                onClick={toggleModal}
                className="text-neutral absolute top-2 right-4 hover:text-red"
              >
                &times;
              </button>
            </div>
            <h2 className="text-2xl p-4 mb-4">Contact Information</h2>
            <p>Here is the contact information...</p>
            <div>
              <h3>Email:</h3>
              <p></p>
            </div>
            <div>
              <h3>Linked in</h3>
              <p></p>
            </div>
            <div>
              <h3>Github</h3>
              <p></p>
            </div>
            <div>
              <h3>Discord Username</h3>
              <p></p>
            </div>
            {/* Add your contact information here */}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default NavBar
