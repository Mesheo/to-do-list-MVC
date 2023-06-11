const path = require("path");
const fs = require("fs").promises;

async function readFile(caminhoProArquivo) {
    try {
        const data = await fs.readFile(caminhoProArquivo);
        return data;
    } catch (err) {
        throw err;
    }
}
module.exports = readFile;