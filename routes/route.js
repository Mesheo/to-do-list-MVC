const path = require("path");
const fs = require("fs");
const ejs = require("ejs");

function servirBrowser(
    objetoDeRequisicao,
    objetoDeResposta,
    caminhoProArquivo,
    contentType
) {
    if (objetoDeRequisicao.method == "POST") {
        console.log("CADE OS DADOS!!!!!!!!!!");
        objetoDeRequisicao.on("data", (inputData) => {
            console.log("Ta aqui: ", inputData.toString());
        });       
        objetoDeResposta.end('Dados do formulário recebidos');

    } else if (objetoDeRequisicao.method == "GET") {
        filePath = path.join(__dirname, "..", caminhoProArquivo);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log("Deu ruim lendo arquivo: ", err);
                objetoDeResposta.end();
            } else if (objetoDeRequisicao.method == "GET") {
                console.log(
                    "Metodo do Objeto de requisicao: ",
                    objetoDeRequisicao.method
                );
                objetoDeResposta.setHeader("Content-type", contentType);
                console.log(
                    `---- Headers da resposta ${caminhoProArquivo}: `,
                    JSON.stringify(objetoDeResposta.getHeaders())
                );
                objetoDeResposta.end(data);
            }
        });
    }
}

const rotas = {
    "/": (req, res) => {
        servirBrowser(req, res, "views/index.ejs", "text/html");
    },
    "/favicon.ico": (req, res) => {
        servirBrowser(req, res, "public/favicon.ico", "image/x-icon");
    },
    "/style.css": (req, res) => {
        servirBrowser(req, res, "public/style.css", "text/css");
    },
    "/script.js": (req, res) => {
        servirBrowser(req, res, "public/script.js", "application/javascript");
    },
};

module.exports = rotas;
