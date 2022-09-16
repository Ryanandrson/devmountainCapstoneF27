const express = require('express')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(cors())



const { getClients, createClient, deletePerson } = require('./controller')


app.get("/api/clients", getClients);
app.post("/api/client" , createClient)
app.delete("/api/delete/:name" , deletePerson)







app.listen(5500, () => console.log('Running on port 5500'))