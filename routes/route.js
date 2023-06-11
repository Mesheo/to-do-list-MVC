const path = require("path");
const fs = require("fs").promises;
const ejs = require("ejs");
const querystring = require("querystring");

async function readFile(caminhoProArquivo) {
    try {
        const data = await fs.readFile(caminhoProArquivo);
        return data;
    } catch (err) {
        throw err;
    }
}

async function servirBrowser(
    objetoDeRequisicao,
    objetoDeResposta,
    caminhoProArquivo,
    contentType
) {
    if (objetoDeRequisicao.method == "POST") {
        objetoDeRequisicao.on("data", (data) => {
            inputData = data.toString();
            console.log("-- DADOS da chamada: ", querystring.parse(inputData));
        });
        objetoDeResposta.end(`
        <script>alert('Obrigado por enviar o formulario!');</script>
    `);
    } else if (objetoDeRequisicao.method == "GET") {
        try {
            data = await readFile(caminhoProArquivo);
            objetoDeResposta.setHeader("Content-type", contentType);
            objetoDeResposta.end(data);
        } catch (e) {
            objetoDeResposta.setHeader("statusCode", 500);
            objetoDeResposta.end("ERRO NO SERVER!");
            console.log("Deu ruim lendo arquivo: ", err);
        }
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
