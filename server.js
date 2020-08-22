const http = require('http')
const server = http.createServer((req, res) => {
    console.log('nova conexao')
    res.end(`CAND_ENV: ${process.env.CAND_ENV}, API_URL: ${process.env.API_URL}, ADMIN_URL: ${process.env.ADMIN_URL}`)
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log('listening'))
