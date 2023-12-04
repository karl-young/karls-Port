import UseAnimation from '../../animation'

const Background = () => {
  // function resizeCanvas() {
  //   canvas.width = window.innerWidth
  //   canvas.height = window.innerHeight
  // }

  return (
    <>
      <div>
        <div>
          <canvas id="canvas">
            <UseAnimation />
          </canvas>
        </div>
      </div>
    </>
  )
}

// return (
//   <canvas
//     onMouseMove={(evt) => animationRef.current.onMouseMove(evt)}
//     ref={canvasRef}
//   />
// )

export default Background
