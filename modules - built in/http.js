const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Home Page")
    }
    if(req.url === '/about'){
        res.end("History about us.")
    }
    res.end(
        `<h1>OOPs Wrong Request</h1>`
    )
})

server.listen(5000);