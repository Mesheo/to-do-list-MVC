const readFile = require("../utils/readfile.js");

async function favicon(req) {
    if (req.method == "GET") {
        const data = await readFile("public/favicon.ico");
        return { ContentType: "image/x-icon", responseData: data };
    }
}
module.exports = favicon;
