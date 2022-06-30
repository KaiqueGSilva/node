import express, {Request, Response} from 'express'
// import { Server } from 'http'
import mainRoutes from './routes/index'
import path from 'path'

import mustache from 'mustache-express'

//Usando express
const server = express()

//CONFIGURANDO O MUSTACHE
server.set('view engine', 'mustache')

//CONFIGURANDO A PASTA VIEWS PARA O MUSTACHE
server.set('views',(path.join(__dirname,'views')))

server.engine('mustache',mustache())

//Criando a rota para acessar a pasta public
server.use(express.static(path.join(__dirname,'../public')))

//INSERINDO A ROTA NO SERVIDOR
server.use(mainRoutes)

server.use((req:Request, res:Response) =>{
    res.status(404).send("Página não encontrada")
})

//ESCUTANDO A PORTA 3000
server.listen(3000)
