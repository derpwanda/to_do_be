const http = require("http");

const hostname = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "json")
    res.end("It's Alive!!")
});

server.listen(port, hostname, () => {
    console.log(`server listening on http://${hostname}:${port}`)
})