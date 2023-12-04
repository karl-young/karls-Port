import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

interface Circle {
 
  x: number, y: number, dx: number, dy: number, radius: number, color: string
}

const CanvasAnimation: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const [circleArray, setCircleArray] = React.useState<Circle[]>([])

  React.useEffect(() => {
    const canvas = canvasRef.current
    const c = canvas?.getContext('2d')
    const colors: string[] = []

    for (let i = 0; i < 20; i++) {
      const randomColor =
        '#' + Math.floor(Math.random() * 16777215).toString(16)
      colors.push(randomColor)
    }

    // const mouse = {
    //   x: undefined,
    //   y: undefined,
    // }

    // const maxRadius = 50

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    const init = () => {
      setCircleArray([])
      for (let i = 0; i < 400; i++) {
        const radius = Math.random() * 3 + 1
        const y = Math.random() * (window.innerHeight - radius * 2) + radius
        const x = Math.random() * (window.innerWidth - radius * 2) + radius
        const dx = (Math.random() - 0.5) * 1
        const dy = (Math.random() - 0.5) * 1
        const color = colors[Math.floor(Math.random() * colors.length)]
        setCircleArray((prevArray) => [
          ...prevArray,
          new Circle(x, y, dx, dy, radius, color),
        ])
      }
    }

    const animate = () => {
      requestAnimationFrame(animate)
      c?.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
      }
    }

    // window.addEventListener('mousemove', function (e) {
    //   mouse.x = e.x
    //   mouse.y = e.y
    // })

    window.addEventListener('DOMContentLoaded', function () {
      resizeCanvas()
    })

    window.addEventListener('resize', function () {
      resizeCanvas()
    })

    animate()
    init()
  }, [])

  return (
    <canvas
      className="absolute inset-0 h-100% bg-stone w-100% z-0 "
      id="canvas"
      ref={canvasRef}
    ></canvas>
  )
}

export default CanvasAnimation
