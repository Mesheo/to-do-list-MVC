const {
    getAllTasks,
    getTaskById,
    createTask,
    editTask,
    deleteTask,
} = require("../controllers/taskController");
const favicon = require("../controllers/faviconController");
const css = require("../controllers/cssController");
const script = require("../controllers/scriptController");
const font = require("../controllers/fontController");
const querystring = require("querystring");

async function roteador(req) {
    const { body, method } = await requestMiddleware(req);
    console.log("Router got a requisition from requestMiddleware", {
        body,
        method,
    });

    if (method === "POST") {
        return createTask(body);
    } else if (method === "PUT") {
        return await editTask(body);
    } else if (method === "DELETE") {
        return await deleteTask(body);
    } else if (method === "GET") {
        if (req.url.includes("/style.css")) {
            return await css();
        } else if (req.url.includes("/VCR_OSD_MONO_1.001.ttf")) {
            return await font();
        } else if (req.url.includes("/favicon.ico")) {
            return await favicon();
        } else if (req.url === "/script.js") {
            return await script();
        } else if (req.url === "/") {
            return await getAllTasks(req);
        } else if (req.url.includes("/task/")) {
            return await getTaskById(body);
        }
    }
}

module.exports = roteador;

function requestMiddleware(request) {
    return new Promise((resolve, reject) => {
        try {
            let method = "";
            let body = "";

            request.on("data", (data) => {
                body += data.toString();
            });
            request.on("end", () => {
                body = querystring.parse(body);
                console.log("!!OLHA o body dentro do middleware: ", body);
                body.isCheck ? (body.isCheck = true) : (body.isCheck = false);
                method = body._method ?? request.method;
                if (request.url.includes("/task/")) {
                    body.taskId = request.url.replace("/task/", "");
                }

                resolve({ body, method });
            });
        } catch (e) {
            console.log("Algo deu errado lendo o input: ", e);
            reject(e);
        }
    });
}
