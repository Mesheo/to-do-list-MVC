const servirBrowser = require("../utils/servirBrowser.js");

async function script(req, res) {
    if (req.method == "GET") {
        servirBrowser(res, "public/script.js", "application/javascript");
    }
}
module.exports = script;
