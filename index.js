const http = require("http");
const rotas = require("./routes/route.js");
const port = 3005;

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