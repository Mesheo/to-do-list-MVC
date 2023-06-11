const readFile = require("./readfile");

async function servirBrowser(
    objetoDeResposta,
    caminhoProArquivo,
    contentType
) {
    try {
        data = await readFile(caminhoProArquivo);
        objetoDeResposta.setHeader("Content-type", contentType);
        objetoDeResposta.end(data);
    } catch (e) {
        objetoDeResposta.setHeader("statusCode", 500);
        objetoDeResposta.end("ERRO NO SERVER!");
        console.log("Deu ruim lendo arquivo: ", e);
    }
}

module.exports = servirBrowser