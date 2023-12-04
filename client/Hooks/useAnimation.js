import { useEffect, useRef } from 'react'

export default function useAnimation() {
  const canvasRef = useRef()
  useEffect(() => {
    const canvas = canvasRef.current
    const c = canvas.getContext('2d')
    const colors = ['#5f5dbd', '#5e87b8', '#83cee0', '#a4fbe3']

    function resizeCanvas() {
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
      init()
    }
  }, [])
  let maxRadius = 50

  window.addEventListener('DOMContentLoaded', function () {
    resizeCanvas()
  })

  window.addEventListener('resize', function () {
    resizeCanvas()
  })

  function Circle(x, y, dx, dy, radius, color) {
    this.color = color
    this.dx = dx
    this.dy = dy
    this.x = x
    this.y = y
    this.radius = radius
    this.minRadius = radius
    this.draw = function () {
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      c.fillStyle = this.color
      c.stroke()
      c.fill()
    }
    this.update = function () {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx
      }

      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy
      }
      this.x += this.dx
      this.y += this.dy

      this.draw()
    }
  }

  let circleArray = []

  const init = () => {
    circleArray = []
    for (let i = 0; i < 100; i++) {
      let radius = Math.random() * 3 + 1
      let y = Math.random() * (innerHeight - radius * 2) + radius
      let x = Math.random() * (innerWidth - radius * 2) + radius
      let dx = (Math.random() - 0.5) * 1 //
      let dy = (Math.random() - 0.5) * 1
      let color = colors[Math.floor(Math.random() * colors.length)]

      circleArray.push(new Circle(x, y, dx, dy, radius, color))
    }
    animate()
  }

  const animate = () => {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, window.innerWidth, window.innerHeight)
    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update()
    }
  }
  init()
}
