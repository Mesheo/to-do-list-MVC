const path = require("path");
const fs = require("fs");

const rotas = {
    "/": (req, res) => {
        console.log("É entramos na url / pela ", "vez");
        res.write("AQUI EH NOSSO WEBSITE");
        res.end();
    },
    "/favicon.ico": (req, res) => {
        const iconPath = path.join(__dirname, "..", "public", "favicon.ico");
        fs.readFile(iconPath, (err, data) => {
            if (err) {
                console.log("Deu ruim lendo arquivo: ", err);
                res.writeHead(500, {
                    "Content-Type": "text/plain",
                });
                res.end();
                return;
            } else {
                res.writeHead(200, { "Content-Type": "image/x-icon" });
                res.end(data);
            }
        });
    },
};

module.exports = rotas;
