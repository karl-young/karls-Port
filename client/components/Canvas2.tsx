import React, { useEffect, useRef } from 'react'

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    let requestId: number

    const animate = () => {
      // Your animation logic here
      // ...

      // Example animation code
      const animateFrame = () => {
        // ...
        requestId = requestAnimationFrame(animateFrame)
      }

      animateFrame()
    }

    if (canvas) {
      const context = canvas.getContext('2d')
      if (context) {
        animate()
      }
    }

    return () => {
      cancelAnimationFrame(requestId)
    }
  }, [])

  return <canvas id="canvas" ref={canvasRef} />
}

export default Canvas