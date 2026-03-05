const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const PORT = 3001

// API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

// Serve static files from dist in production, proxy to vite in dev
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
  })
} else {
  // In dev, Vite handles static files
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  })
  app.use(express.static(__dirname))
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})