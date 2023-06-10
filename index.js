const http = require("http");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const rotas = require("./routes/route.js");

const port = 3000;
const data = {};

function startServer() {
    // const roteador = new Route();

    const server = http.createServer((req, res) => {
        console.log("Função de callBack chamada");
        rotas[req.url](req, res);
    });

    server.on("error", (e) => {
        console.error(`Server error: ${e}`);
    });

    server.listen(port, () => {
        console.log(`Server is running on port http://localhost:${port}`);
    });
    /*
    const server = http.createServer((req, res) => {
        console.log("Função de callBack chamada");
        console.log(rota.mostrar());

        if (req.url === "/") {
            ejs.renderFile("views/index.ejs", { data }, function (err, str) {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end(`Server error: ${err}`);
                } else {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.end(str);
                }
            });
        } else if (req.url.match(".css$")) {
            const cssPath = path.join(__dirname, "public", req.url);
            const fileStream = fs.createReadStream(cssPath, "UTF-8");
            res.writeHead(200, { "Content-Type": "text/css" });
            fileStream.pipe(res);
        } else if (req.url.match(".js$")) {
            const scriptPath = path.join(__dirname, "public", req.url);
            const fileStream = fs.createReadStream(scriptPath, "UTF-8");
            console.log(req.url);
            res.writeHead(200, { "Content-Type": "application/javascript" });
            fileStream.pipe(res);
        }
    });
    */
}

startServer();
