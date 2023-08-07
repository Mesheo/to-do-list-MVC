const http = require("http");
const router = require("./routes/route.js");
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
        console.log(`\nINFO - [${req.method} ${req.url}] Server Callback Function: ${vezes}° call received from browser`)

        const { statusCode, Location, ContentType, responseData  } = await router(req);

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
        console.log(`INFO - [SERVER] Server is running on port: http://localhost:${port}`);
    });
}

startServer();
