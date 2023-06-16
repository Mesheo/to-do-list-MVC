const readFile = require("../utils/readfile.js");

async function favicon(req, res) {
    if (req.method == "GET") {
        const data = await readFile("public/favicon.ico");
        return { contentType: "image/x-icon", responseData: data };
    }
}
module.exports = favicon;
