const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
const helmet = require("helmet")
const fileUpload = require("express-fileupload")
const { connectDB } = require("./utils/mongoose")
const {
    PORT,
    DB,
    APP_ORIGIN,
} = require("./config/config")

// Middlewares
app.use(cors({ origin: APP_ORIGIN }))
app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './assets/tmp'
}))

// Connection to DB
connectDB(app, PORT, DB)

// Routes
const { users } = require('./routes')
app.use('/api/users', users)

const { gifts} = require('./routes')
app.use('/api/gifts', gifts)