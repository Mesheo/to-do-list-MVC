const readFile = require("../utils/readfile.js");

async function css(req, res) {
    if (req.method == "GET") {
        const data = await readFile("public/style.css");
        return { contentType: "text/css", response: data };
    }
}
module.exports = css;

