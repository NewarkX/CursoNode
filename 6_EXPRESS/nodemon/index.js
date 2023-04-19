const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/', (request, response) => {
    response.sendFile(`${basePath}/index.html`)
})

app.listen(port,() => {
    console.log(`App rodando na porta ${port}`)
})