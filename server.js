const http = require('http')
const server = http.createServer((req, res) =>{
    console.log('nova conexao')
    res.end('hello awesome - now with continuous deployment')
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, ()=>console.log('listening'))
