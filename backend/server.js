const express = require('express')
const app = express()

const connectDB = require('./config/db')

connectDB()

// Middleware
app.use(express.json())

const PORT = 5000 || process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${5000}`)
})