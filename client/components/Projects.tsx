import { useState, useEffect, useCallback, SetStateAction } from 'react'

const Projects = () => {
  const [sliderItems, setSliderItems] = useState([
    {
      src: 'client/styles/images/temp/1thargoid.jpg',
      alt: 'thargoid ships',
      author: 'Frontier',
      title: 'Thargoid Ships',
      topic: 'Aliens',
      des: 'Thargoid Ships are a race of Aliens that live in the galaxy.',
    },
    {
      src: 'client/styles/images/temp/1080p-space.jpg',
      alt: 'Fake Space ships',
      author: 'Unknown',
      title: 'Awesome Space',
      topic: 'Space',
      des: 'Space is the most beautiful place in the universe. This one is Fake.',
    },
    {
      src: 'client/styles/images/temp/BlueStar.jpg',
      alt: 'blue star with ship on planet with rings',
      author: 'Karl',
      title: 'Blue Star with rings',
      topic: 'Blue Star',
      des: 'Blue star picture taken by karl on a planet with rings',
    },
    {
      src: 'client/styles/images/temp/Conda.jpg',
      alt: 'Anaconda ship in a small nebula',
      author: 'KY71',
      title: 'Nebula with a large snake',
      topic: 'Space and Ships',
      des: 'Picture of an anaconda ship in a small nebula',
    },
    {
      src: 'client/styles/images/temp/Swirl.jpg',
      alt: 'swirl',
      author: 'Unknown',
      title: 'Swirl',
      topic: 'Abstract',
      des: 'An abstract picture of swirls',
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

      setSliderItems(
        (
          prevItems: Array<{
            src: string
            alt: string
            author: string
            title: string
            topic: string
            des: string
          }>
        ) => {
          const newItems = [...prevItems]
          if (type === 'next') {
            newItems.push(
              newItems.shift() as {
                src: string
                alt: string
                author: string
                title: string
                topic: string
                des: string
              }
            )
          } else if (type === 'prev') {
            newItems.unshift(
              newItems.pop() as {
                src: string
                alt: string
                author: string
                title: string
                topic: string
                des: string
              }
            )
          }
          return newItems
        }
      )

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
                <div className="author">{item.author}</div>
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <div className="des">{item.des}</div>
                <div className="buttons">
                  <button>Read More</button>
                  <button>Subscribe</button>
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
