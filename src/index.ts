import express, {Express, Request, Response} from "express"
import dotenv from "dotenv"

dotenv.config()

const app : Express = express()
const port = process.env.PORT || 3000

//Endpoint
// Ruta: "/"
// "Tipo (method): (GET)"

app.get("/", (req : Request, resp : Response) => {
    resp.send("HOLA Pw")
})

app.get("/ep1", (req : Request, resp :Response) => {
    resp.send("Endpoint 2")
})

app.get("/ep2/:nombre", (req : Request, resp :Response) => {
    resp.send(`Hola ${req.params.nombre}`)
})

app.get("/ep3", (req : Request, resp :Response) => {
    resp.send(`Hola ${req.query.nombre} ${req.query.apellido}`)
})
//localhost:5000/ep3?nombre=Edgar&apellido=Vargas

app.listen(port, () => {
    console.log(`[Server]: Servidor ejecutandose en puerto ${port}`)
})