const { getAllTasks, createTask } = require("../controllers/taskController");
const favicon = require("../controllers/faviconController");
const css = require("../controllers/cssController");
const script = require("../controllers/scriptController");

const rotas = {
    "/": getAllTasks,
    "/create": createTask,
    "/favicon.ico":favicon,
    "/style.css": css,
    "/script.js": script,
};

module.exports = rotas;
