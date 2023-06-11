const path = require("path");
const fs = require("fs");
const ejs = require("ejs");

function servirBrowser(objetoDeResposta, caminhoProArquivo, contentType) {
    filePath = path.join(__dirname, "..", caminhoProArquivo);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log("Deu ruim lendo arquivo: ", err);
            objetoDeResposta.end();
        } else {
            objetoDeResposta.writeHead(200, { "Content-type": contentType });
            objetoDeResposta.end(data);
            console.log(
                `Cabeçalho 'Content-Type' após servir o arquivo ${caminhoProArquivo}`,
                objetoDeResposta.getHeader("Content-Type")
            );
        }
    });
}

const rotas = {
    "/": (req, res) => {
        servirBrowser(res, "views/index.ejs", "text/html");
    },
    "/favicon.ico": (req, res) => {
        servirBrowser(res, "public/favicon.ico", "image/x-icon");       
    },
    "/style.css": (req, res) => {
        servirBrowser(res, "public/style.css", "text/css");       
    },
    "/script.js": (req, res) => {
        servirBrowser(res, "public/script.js", "application/javascript");       
    }
};

module.exports = rotas;
