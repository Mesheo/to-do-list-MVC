const http = require("http");
const rotas = require("./routes/route.js");
const port = 3000;

let vezes = 0;


function startServer() {
    const server = http.createServer((req, res) => {
        vezes += 1;
        console.log(`\n*___ FUNÇÃO DE CALLBACK CHAMADA PELA ${vezes}° VEZ ___*`);
        console.log("-- Método da solicitação: ", req.method);
        console.log("-- URL da chamada: ", req.url);
        rotas[req.url](req, res);
    });

    server.on("error", (e) => {
        console.error(`Server error: ${e}`);
    });

    server.listen(port, () => {
        console.log(`Server is running on port http://localhost:${port}`);
    });
}
startServer();

/*
    const server = http.createServer((req, res) => {
    
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
