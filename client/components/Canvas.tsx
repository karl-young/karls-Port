const Background = () => {
  return (
    <>
      <div className="absolute inset-0 h-100% bg-stone w-100% z-0 ">
        <div>
          <canvas id="canvas"></canvas>
        </div>
      </div>
    </>
  )
}

export default Background
