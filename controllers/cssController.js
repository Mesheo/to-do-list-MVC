const readFile = require("../utils/readfile.js");

async function css(req) {
    if (req.method == "GET") {
        const responseData = await readFile("public/style.css");
        return { ContentType: "text/css", responseData };
    }
}
module.exports = css;

