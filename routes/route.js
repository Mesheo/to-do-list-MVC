const {
    getAllTasks,
    createTask,
    editTask,
    deleteTask,
} = require("../controllers/taskController");
const favicon = require("../controllers/faviconController");
const css = require("../controllers/cssController");
const script = require("../controllers/scriptController");

async function roteador(req) {
    if (req.url.includes("/style.css")) {
        return await css();
    } else if (req.url.includes("/favicon.ico")) {
        return await favicon();
    } else if (req.url === "/script.js") {
        return await script();
    } else if (req.url === "/") {
        return await getAllTasks(req);
    } else if (req.url === "/create") {
        return createTask(req);
    } else if (req.url.includes("/edit")) {
        return await editTask(req);
    } else if (req.url.includes("/delete")) {
        return await deleteTask(req);
    }
}

module.exports = roteador;
