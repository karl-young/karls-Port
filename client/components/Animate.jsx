import { useEffect, useLayoutEffect, useRef, useState } from 'react'

class Particle {
  constructor(ctx, x, y, r) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.r = r
    this.vx = 0
    this.vy = 0
  }

  moveTo(x, y) {
    this.x = x
    this.y = y
  }

  render() {
    this.ctx.beginPath()
    this.ctx.fillStyle = 'white'
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    this.ctx.fill()
  }
}

class SimpleAnimation {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.particles = [
      new Particle(this.ctx, canvas.width / 2, canvas.height / 2, 20),
    ]
  }

  onMouseMove(evt) {
    this.mouseX = evt.clientX
    this.mouseY = evt.clientY
  }

  tick() {
    this.particles.forEach((p) => p.moveTo(this.mouseX, this.mouseY))
    this.ctx.fillStyle = 'black'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.particles.forEach((p) => p.render())
  }
}

const Animation = () => {
  const animationRef = useRef()
  const canvasRef = useRef()

  useAnimationFrame(() => animationRef.current.tick())

  const resize = () => {
    canvasRef.current.width = innerWidth
    canvasRef.current.height = innerHeight
  }
  useWindowResize(resize)

  useLayoutEffect(() => {
    resize()
    animationRef.current = new SimpleAnimation(canvasRef.current)
  }, [])

  return (
    <canvas
      onMouseMove={(evt) => animationRef.current.onMouseMove(evt)}
      ref={canvasRef}
    />
  )
}


function debounce(fn, ms) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), ms)
  }
}

function useWindowResize(fn, ms = 100) {
  const handleResize = debounce(fn, ms)
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
}

function useAnimationFrame(fn) {
  const rafRef = useRef()

  const animate = (time) => {
    fn(time)
    rafRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate)
  
})}


export default Animation