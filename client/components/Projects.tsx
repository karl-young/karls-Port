import { useState, useEffect, useCallback, SetStateAction } from 'react'
import { Project } from '../../models/Projects'

const Projects = () => {
  const [sliderItems, setSliderItems] = useState([
    {
      src: '/client/styles/images/projects/Api-playground.jpg',
      alt: 'Api Playground',
      title: 'Api Playground',
      des: 'A fun project to play around with apis and learn more about them. Made with React and TypeScript',
      btn: 'Live App',
      btn2: "Learn More",
      link: '#',
      link2: "https://github.com/karl-young/api-playground"
    },
    {
      src: 'client/styles/images/temp/1080p-space.jpg',
      alt: 'Fake Space ships',
      title: 'Awesome Space',
      des: 'Space is the most beautiful place in the universe. This one is Fake.',
      btn: 'Live App',
      btn2: "Learn More",
      link: 'https://github.com/yourusername/repo1',
      link2: "https://github.com/karl-young/2D-port-game"
    },
    {
      src: 'client/styles/images/temp/BlueStar.jpg',
      alt: 'blue star with ship on planet with rings',
      title: 'Blue Star with rings',
      des: 'Blue star picture taken by me on a planet with rings',
      btn: 'Live App',
      btn2: "Learn More",
      link: 'https://github.com/yourusername/repo1',
      link2: "https://github.com/karl-young/2D-port-game"
    },
    {
      src: 'client/styles/images/projects/2D-Port-Game.png',
      alt: '2D port game',
      title: '2D Port Game',
      des: 'A portfolio game made with HTML, CSS, JavaScript, and Kaboom.js.',
      btn: 'Live App',
      btn2: "Learn More",
      link: 'https://karl-young.github.io/2D-port-game/',
      link2: "https://github.com/karl-young/2D-port-game"
    },
  ])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [running, setRunning] = useState(true)
  const [direction, setDirection] = useState('')
  const timeRunning = 1000
  const timeAutoNext = 15000

  const showSlider = useCallback(
    (type: SetStateAction<string>) => {
      setDirection(type)
      setRunning(false)

      setSliderItems((prevItems: Project[]) => {
        const newItems = [...prevItems]
        if (type === 'next') {
          newItems.push(newItems.shift() as Project)
        } else if (type === 'prev') {
          newItems.unshift(newItems.pop() as Project)
        }
        return newItems
      })

      setCurrentIndex(
        type === 'next'
          ? (currentIndex + 1) % sliderItems.length
          : (currentIndex - 1 + sliderItems.length) % sliderItems.length
      )

      const timeout = setTimeout(() => {
        setRunning(true)
        setDirection('')
      }, timeRunning)

      return () => clearTimeout(timeout)
    },
    [currentIndex, sliderItems.length]
  )

  useEffect(() => {
    if (!running) {
      const timeout = setTimeout(() => {
        setRunning(true)
      }, timeRunning)
      return () => clearTimeout(timeout)
    }

    const interval = setTimeout(() => {
      showSlider('next')
    }, timeAutoNext)

    return () => clearTimeout(interval)
  }, [currentIndex, running, showSlider])

  return (
    <>
      <div className={`carousel ${running ? 'running' : ''} ${direction}`}>
        <div className="list">
          {sliderItems.map((item, index) => (
            <div
              className={`item ${index === currentIndex ? 'active' : ''}`}
              key={index}
            >
              <img src={item.src} alt={item.alt} />
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="des">{item.des}</div>
                <div className="buttons">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <button className="button">{item.btn}</button>
                  </a>
                  <a href={item.link2} target="_blank" rel="noopener noreferrer">
                    <button className="button">{item.btn2}</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="thumbnail">
          {sliderItems.map((item, index) => (
            <div
              className={`item ${index === currentIndex ? 'active' : ''}`}
              key={index}
            >
              <img src={item.src} alt={item.alt} />
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="des">Description</div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button id="prev" onClick={() => showSlider('prev')}>
            {'<'}
          </button>
          <button id="next" onClick={() => showSlider('next')}>
            {'>'}
          </button>
        </div>
        <div className="time"></div>
      </div>
    </>
  )
}

export default Projects
