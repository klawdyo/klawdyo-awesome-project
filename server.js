const http = require('http')
const server = http.createServer((req, res) => {
    console.log('nova conexao')
    res.end('Continuous Integration concluída com sucesso - Production version 2')
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log('listening'))
