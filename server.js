const express = require('express')
const dotenv = require('dotenv')
const store = require('./routes/store')
const errorHandler = require('./middleware/error')
const morgan = require('morgan')
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })

const app = express()

app.use(express.json())

connectDB()

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

app.use('/api/v1/store', store)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, console.log('server'))

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: ${err.message}`)
	// Close server & exit process
	server.close(() => process.exit(1))
})