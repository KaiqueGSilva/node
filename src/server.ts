import express, {Request, Response} from 'express'
import { Server } from 'http'

//Usando express
const server = express()

server.get('/',(req:Request,res:Response) =>{

    res.send("Doente de amor procurei remedio na vida noturna")

})

server.listen(3000)
