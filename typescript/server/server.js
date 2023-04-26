import express from 'express'
import axios from 'axios'
import cors from 'cors'
import 'dotenv/config'

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

app.get('/:amount/:difficulty', async (req, res) => {
    const response = await axios.get(`${process.env.API_URL}?amount=${req.params.amount}&difficulty=${req.params.difficulty}&type=multiple`)
    res.json(response.data.results)
})

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`))