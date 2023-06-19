const http = require("http");
const rotas = require("./routes/route.js");
const connectToDb = require("./database/db.js");
const port = 3000;

let vezes = 0;
connectToDb();

async function responseMiddleware(
    responseObject,
    { statusCode, Location = "", ContentType = "", responseData }
) {
    if (statusCode && Location) {
        responseObject.writeHead(statusCode, { Location: Location });
        responseObject.end();
    } else {
        responseObject.setHeader("Content-type", ContentType);
        responseObject.end(responseData);
    }
}

function startServer() {
    const server = http.createServer(async (req, res) => {
        vezes += 1;
        console.log(
            `\n---> Função de callback chamada pela ${vezes}° vez`,
            `| Método da solicitação: ${req.method} | URL da chamada: ${req.url}`
        );
        let statusCode, Location, ContentType, responseData;

        if(req.url.includes("/style.css")){
            ({ statusCode, Location, ContentType, responseData } = await rotas["/style.css"]());
        }
        else if (req.url.includes("/editar/")) {
            console.log(
                "ENTRAMOS NO IF LEGAL: ",
                req.url.replace("/editar", "")
            );
            ({ statusCode, Location, ContentType, responseData } = await rotas[
                "/editar"
            ](req.url.replace("/editar", "")));
        } else {
            ({ statusCode, Location, ContentType, responseData } = await rotas[
                req.url
            ](req));
        }

        responseMiddleware(res, {
            statusCode,
            Location,
            ContentType,
            responseData,
        });
    });

    server.on("error", (e) => {
        console.error(`Erro no Server! ${e}`);
    });

    server.listen(port, () => {
        console.log(`Servidor rodando na porta: http://localhost:${port}`);
    });
}

startServer();
