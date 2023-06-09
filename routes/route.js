const path = require("path");
const fs = require("fs");

class Route {
    rotear(requisicao, resposta) {
        this.deuRui = false;
        this.erro = "";
        this.req = requisicao;
        this.res = resposta;
        console.log("OPA peguei uma requisição aqui da url: ", this.req.url);

        if (this.req.url == "/favicon.ico") {
            const iconPath = path.join(
                __dirname,
                "..",
                "public",
                "favicon.icco"
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
        } else {
            this.res.write("website");
            this.res.end();
        }
    }
}

module.exports = Route;
