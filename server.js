const http = require('http')
const server = http.createServer((req, res) => {
    console.log('nova conexao')
    res.end(`CAND_ENV: ${process.env.CAND_ENV}, CAND_API: ${process.env.CAND_API}, CAND_ADMIN: ${process.env.CAND_ADMIN}`)
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log('listening'))
