const servirBrowser = require("../utils/servirBrowser.js")

async function favicon(req, res) {
    if (req.method == "GET") {
        servirBrowser(res, "public/favicon.ico", "image/x-icon");
    }
}
module.exports = favicon;
