import { useState } from 'react'

const NavBar = () => {
  const [hoveredButton, setHoveredButton] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalExpanded, setIsModalExpanded] = useState(false)
  const [isModalMinimized, setIsModalMinimized] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
    setIsModalExpanded(false) // Reset state when modal is toggled
    setIsModalMinimized(false) // Reset state when modal is toggled
  }

  const handleExpand = () => {
    setIsModalExpanded(!isModalExpanded)
    setIsModalMinimized(false) // Ensure it is not minimized when expanded
  }

  const handleMinimize = () => {
    setIsModalMinimized(!isModalMinimized)
  }

  const handleRestore = () => {
    setIsModalMinimized(false)
  }

  return (
    <>
      <nav className="bg-slate-700 opacity-90 sticky drop-shadow-xl top-0 flex items-center h-12 w-full z-50">
        <div className="flex flex-grow justify-end space-x-4">
          {[
            ['Home', '#home'],
            ['About Me', '#about'],
            ['My Projects', '#projects'],
            ['Contact Info', '#contact'],
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

      {isModalOpen && !isModalMinimized && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Modal Backdrop */}
          <div className="fixed backdrop-blur-sm inset-0 bg-black bg-opacity-50"></div>

          {/* Modal Container */}
          <div
            className={`bg-slate-700 text-neutral rounded-md shadow-2xl transform transition-transform duration-500 ease-in-out ${
              isModalExpanded ? 'w-full h-full' : 'w-1/2 h-3/4'
            } translate-y-16 opacity-0 animate-showModal`}
          >
            <div className="flex bg-slate-800 justify-between  items-center rounded-md mb-4">
              <h2 className="text-2xl ml-2 bg-slate-700 rounded-t-lg text-green font-bold font-Helvetica">
                Contact Information
              </h2>
              <div className="flex mr-2 space-x-1 ">
                <button
                  onClick={handleMinimize}
                  className=" hover:text-yellow hover:bg-slate-700 p-1 font-bold  "
                  title="Minimize"
                >
                  {'\u2013'}
                </button>
                <button
                  onClick={handleExpand}
                  className=" hover:text-blue hover:bg-slate-700 p-1 "
                  title={isModalExpanded ? 'Restore' : 'Expand'}
                >
                  {isModalExpanded ? '🗗' : '🗖'}
                </button>
                <button
                  onClick={toggleModal}
                  className="hover:text-red hover:bg-slate-700 p-1"
                  title="Close"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="ml-3 ">
              <p>Here is how you can reach me</p>
            </div>
            <div className="border-2 border-slate-800 p-4">
              <div className="mb-4">
                <h3>Email:</h3>
                <p>example@example.com</p>
              </div>
              <div className="mb-4">
                <h3>LinkedIn:</h3>
                <p>linkedin.com/in/example</p>
              </div>
              <div className="mb-4">
                <h3>GitHub:</h3>
                <p>github.com/example</p>
              </div>
              <div className="mb-4">
                <h3>Discord Username:</h3>
                <p>example#1234</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalMinimized && (
        <div className="fixed smooth bottom-5 left-1/2 transform -translate-x-1/2 z-50">
          <button
            onClick={handleRestore}
            className="flex items-center space-x-1"
          >
            <div className="text-white">{'<\u00A0'}</div>
            <div className="snowflake"></div>
            <div className="text-white">{`\u00A0>`}</div>
          </button>
        </div>
      )}
    </>
  )
}

export default NavBar
