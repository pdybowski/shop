import express from 'express'
import 'dotenv/config'
import dbConnect from './startup/dbConnect'
import logger from './utils/logger'
import routes from './routes/product.router'


const port: string = process.env.PORT!

const app = express()

app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`)

    await dbConnect();

    routes(app)
})