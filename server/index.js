require('dotenv').config();
const express = require('express')
const sequilze = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const fileUpload = require('express-fileupload')
const path = require("path")

const PORT = process.env.PORT || 8000;

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

//Обработка ошибок, последний Middleware
app.use(errorHandler)


const start = async () => {
	try {
		await sequilze.authenticate()
		await sequilze.sync()

		app.listen(PORT, () => {
			console.log('start on port 5000');
		})
	} catch (e) {
		console.log('e', e);
	}
}
start()
