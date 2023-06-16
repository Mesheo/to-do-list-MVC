const readFile = require("../utils/readfile.js");

async function script(req, res) {
    if (req.method == "GET") {
        const data = await readFile("public/script.js");
        return { contentType: "application/javascript", responseData: data };
    }
}
module.exports = script;
