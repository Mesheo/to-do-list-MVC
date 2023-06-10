const path = require("path");
const fs = require("fs");

class Route {
    rotear(requisicao, resposta) {
        this.req = requisicao;
        this.res = resposta;
        console.log("OPA peguei uma requisição aqui da url: ", this.req.url);

        if (this.req.url == "/") {
            console.log(
                "É entramos na url / pela ",
                this.contadorDaURLbarra,
                "vez"
            );
            this.res.write("AQUI EH NOSSO WEBSITE");
            this.res.end();
        }
        if (this.req.url == "/favicon.ico") {
            const iconPath = path.join(
                __dirname,
                "..",
                "public",
                "favicon.ico"
            );
            fs.readFile(iconPath, (err, data) => {
                if (err) {
                    console.log("Deu ruim lendo arquivo: ", err);
                    this.res.writeHead(500, {
                        "Content-Type": "text/plain",
                    });
                    this.res.end();
                    return;
                } else {
                    this.res.writeHead(200, { "Content-Type": "image/x-icon" });
                    this.res.end(data);
                }
            });
        }
    }
}

module.exports = Route;
