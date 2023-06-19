const { getAllTasks, createTask, editTask } = require("../controllers/taskController");
const favicon = require("../controllers/faviconController");
const css = require("../controllers/cssController");
const script = require("../controllers/scriptController");

const rotas = {
    "/editar": editTask,
    "/": getAllTasks,
    "/create": createTask,
    "/favicon.ico": favicon,
    "/style.css": css,
    "/script.js": script,
};

module.exports = rotas;
