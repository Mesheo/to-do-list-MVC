const servirBrowser = require("../utils/servirBrowser.js")

async function css(req, res) {
    if (req.method == "GET") {
        servirBrowser(res, "public/style.css", "text/css");
    }
}
module.exports = css;

