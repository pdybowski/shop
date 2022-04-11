import mongoose from 'mongoose'
import 'dotenv/config'
import logger from '../utils/logger'


async function dbConnect() {
    const dbUri: string = process.env.DBPATH_TEST!
    try {
        await mongoose.connect(dbUri)
        logger.info("DB Connected")
    } catch (error) {
        logger.error("Could not conenct to db")
        process.exit(1)
    }
}


export default dbConnect;