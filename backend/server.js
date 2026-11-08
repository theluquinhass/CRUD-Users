import dns from 'node:dns'

dns.setServers(['8.8.8.8', '8.8.4.4'])

import 'dotenv/config'
import express from 'express'
import connectDB from './config/database.js'
import router from './routes/userRoutes.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const port = 3000

await connectDB()

app.use("/users", router)

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`)
})