const http = require("http");
const fs = require("fs");
let server;
function startServer() {
    server = http.createServer((req, res) => {
        if (req.url === "/") {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Hello world</h1>");
        }
    });

    server.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}



startServer();