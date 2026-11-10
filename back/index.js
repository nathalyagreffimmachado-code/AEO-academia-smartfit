import express from 'express'
import academia from './router/academia.js'
import professores from './router/professores.js'
import planos from './router/planos.js'
import treinos from './router/treinos.js'
import matriculas from './router/matriculas.js'

import database from './config/database.js'

const app = express()

app.use(express.json())

app.use("/api/v1/academia", academia)
app.use("/api/v1/professores", professores)
app.use("/api/v1/planos", planos)
app.use("/api/v1/treinos", treinos)
app.use("/api/v1/matriculas", matriculas)

database.db
    .sync({ force: false })
    .then(() => {

        app.listen(3000, () => {

            console.log("Servidor Porta 3000")

        })

    })
    .catch((e) => {

        console.log(e)

    })