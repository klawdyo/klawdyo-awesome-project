  const server = http.createServer((req, res) =>{
      console.log('nova conexao')
      res.end('hello awesome')
  })

  const PORT = process.env.PORT || 8080;

  server.listen(PORT, ()=>console.log('listening'))
