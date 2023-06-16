const readFile = require("../utils/readfile.js");

async function css(req, res) {
    if (req.method == "GET") {
        const responseData = await readFile("public/style.css");
        return { contentType: "text/css", responseData };
    }
}
module.exports = css;

