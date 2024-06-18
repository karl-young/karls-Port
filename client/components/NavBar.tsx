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
            className={`bg-slate-700 text-neutral pb-auto  rounded-md shadow-2xl transform transition-transform duration-500 ease-in-out ${
              isModalExpanded ? 'w-full h-full' : 'w-[500px] h-auto '
            } translate-y-16 opacity-0 animate-showModal`}
          >
            <div className="flex bg-slate-800 justify-between items-center rounded-t-md  mb-4">
              <h2 className="text-2xl px-2 ml-2 bg-slate-700 rounded-t-lg text-neutral font-bold font-Helvetica">
                My Contact Information
              </h2>
              <div className="flex mr-2 space-x-1 ">
                <button
                  onClick={handleMinimize}
                  className=" hover:text-yellow hover:bg-slate-700 p-1 font-bold"
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
            <div className="ml-4">
              <h2 className="text-green font-bold text-xl">Hi, Karl here!</h2>
              <h3>This is how you can reach me:</h3>
            </div>
            <div className="border-2 m-4 rounded-md border-slate-800 shadow-xl  bg-slate-700">
              <div className=" p-6">
                <h3>My Email:</h3>
                <p>Karlyoung112@gmail.com</p>
              </div>
              <div className=" p-6 bg-slate-800">
                <h3>LinkedIn:</h3>
                <a
                  className="hover:text-green"
                  href="https://www.linkedin.com/in/karl-young-4846602a4/"
                >
                  My Linked-In
                </a>
              </div>
              <div className=" p-6 ">
                <h3>GitHub:</h3>
                <a
                  className="hover:text-green"
                  href="https://github.com/karl-young"
                >
                  My GitHub
                </a>
              </div>
              <div className=" p-6  bg-slate-800">
                <h3>Discord Username:</h3>
                <p>Karl(ky71)#31428</p>
              </div>
              <div className=" p-6  ">
                <h3>My Resume</h3>
                <a
                  href="https://docs.google.com/presentation/d/1AUejQFNK5vupxhz2nzUS0ggoN4Mykl_wdi7plZCLgGw/edit#slide=id.p"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green"
                >
                  Link to Resume
                </a>
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
            <div className="text-neutral ">{'<\u00A0'}</div>
            <div className="snowflake"></div>
            <div className="text-neutral ">{`\u00A0>`}</div>
          </button>
        </div>
      )}
    </>
  )
}

export default NavBar
