import * as Path from 'node:path'
import express from 'express'

const server = express()
server.use(express.json())

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files from 'public' directory (if exists)
  server.use(express.static(Path.resolve('public')))

  // Serve assets from 'dist/assets' directory (if exists)
  server.use('/assets', express.static(Path.resolve('./dist/assets')))

  // For all other routes, serve 'index.html' (for SPA routing)
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
