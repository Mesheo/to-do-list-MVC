const http = require("http");
const rotas = require("./routes/route.js");
const connectToDb = require("./database/db.js");
const { response } = require("express");
const port = 3000;

let vezes = 0;
connectToDb();

async function responseMiddleware(
    responseObject,
    { contentType, responseData }
) {
    responseObject.setHeader("Content-type", contentType);
    // responseObject.write(responseData)
    responseObject.end(responseData);
}

function startServer() {
    const server = http.createServer(async (req, res) => {
        vezes += 1;
        console.log(
            `\n---> Função de callback chamada pela ${vezes}° vez`,
            `| Método da solicitação: ${req.method} | URL da chamada: ${req.url}`
        );
        const { contentType, responseData } = await rotas[req.url](req, res);
        responseMiddleware(res, { contentType, responseData });
    });

    server.on("error", (e) => {
        console.error(`Erro no Server! ${e}`);
    });

    server.listen(port, () => {
        console.log(`Servidor rodando na porta: http://localhost:${port}`);
    });
}
startServer();
