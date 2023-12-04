export default function useAnimation() {
  const canvas = document.getElementById('canvas')
  const c = canvas.getContext('2d')
  const colors = ['#5f5dbd', '#5e87b8', '#83cee0', '#a4fbe3']

  // for (let i = 0; i < 20; i++) {
  //   const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
  //   colors.push(randomColor)
  // }

  // let mouse = {
  //   x: undefined,
  //   y: undefined,
  // }

  let maxRadius = 50
  // let minRadius = 4

  // window.addEventListener('mousemove', function (e) {
  //   mouse.x = e.x
  //   mouse.y = e.y
  // })

  function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    init()
  }

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

      //interactivity
      // if (
      //   mouse.x - this.x < 50 &&
      //   mouse.x - this.x > -50 &&
      //   mouse.y - this.y < 50 &&
      //   mouse.y - this.y > -50
      // ) {
      //   if (this.radius < maxRadius) {
      //     this.radius += 1
      //   }
      // } else if (this.radius > this.minRadius) {
      //   this.radius -= 1
      // }
      //for lines
      // connectCirclesWithMouse()

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

  return init()
}

// -- Lines --//
// function connectCirclesWithMouse() {
//   for (let i = 0; i < circleArray.length; i++) {
//     const distance = calulateDistance(
//       mouse.x,
//       mouse.y,
//       circleArray[i].x,
//       circleArray[i].y
//     )

//     if (distance < maxRadius) {
//       c.beginPath()
//       c.moveTo(mouse.x, mouse.y)
//       c.lineTo(circleArray[i].x, circleArray[i].y)
//       c.strokeStyle = circleArray[i].color
//       c.stroke()
//     }
//   }
// }

// function calulateDistance(x1, y1, x2, y2) {
//   return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
// }
