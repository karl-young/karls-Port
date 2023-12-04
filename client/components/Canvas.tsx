import useAnimation from '../../animation'
import React, { useEffect, useRef } from 'react'
const Canvas = () => {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    useAnimation(canvas, context)
  }, [])

  return <canvas id="canvas"></canvas>
}

export default Canvas
