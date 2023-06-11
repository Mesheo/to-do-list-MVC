const index = require("../controllers/indexController");
const favicon = require("../controllers/faviconController");
const css = require("../controllers/cssController");
const script = require("../controllers/scriptController");

const rotas = {
    "/": index,
    "/favicon.ico":favicon,
    "/style.css": css,
    "/script.js": script,
};

module.exports = rotas;
