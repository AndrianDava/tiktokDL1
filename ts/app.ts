import express from 'express'
import path from 'path'

import { loadApiEndPoints } from './api'

// create express server
const app = express()

app.set('port', process.env.PORT || 3000)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

loadApiEndPoints(app)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'../public/404.html'))
})

export default app