const http = require("http");
const rotas = require("./routes/route.js");
const port = 3000;

let vezes = 0;

function startServer() {
    const server = http.createServer(async (req, res) => {
        vezes += 1;
        console.log(`\n*___ FUNÇÃO DE CALLBACK CHAMADA PELA ${vezes}° VEZ ___*`);
        console.log("-- Método da solicitação: ", req.method);
        console.log("-- URL da chamada: ", req.url);

        const {contentType, response} = await rotas[req.url](req, res);
        res.setHeader("Content-type", contentType);
        res.end(response);
    });

    server.on("error", (e) => {
        console.error(`Server error: ${e}`);
    });

    server.listen(port, () => {
        console.log(`Server is running on port http://localhost:${port}`);
    });
}
startServer();