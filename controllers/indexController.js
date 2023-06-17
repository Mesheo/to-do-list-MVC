const querystring = require("querystring");
const viewRenderer = require("../views/viewRenderer");
const taskModel = require("../models/Task");

async function index(req, res) {
    if (req.method == "GET") {
        return await handleGetRequest(req, res);
    } else {
        return await handlePostRequest(req, res);
    }
}
module.exports = index;

async function handleGetRequest() {
    try {
        const tasksList = await taskModel.find();
        console.log("ABRIU o site peguei as tasks: ", tasksList);

        const htmlRendered = await viewRenderer.renderIndexView(tasksList);
        return { ContentType: "text/html", responseData: htmlRendered };
    } catch (e) {
        console.log("Algo deu errado pegando tasks do banco: ", e);
        return { statusCode: 500, responseData: e };
    }
}

function requestMiddleware(request) {
    return new Promise((resolve, reject) => {
        let inputData = "";
        request.on("data", (data) => {
            inputData += data.toString();
        });
        request.on("end", () => {
            inputData = querystring.parse(inputData);
            inputData.isCheck
                ? (inputData.isCheck = true)
                : (inputData.isCheck = false);
            resolve(inputData);
        });
    });
}

async function handlePostRequest(req, res) {
    return new Promise(async (resolve, reject) => {
        const reqInput = await requestMiddleware(req);
        try {
            const newTask = await taskModel.create({
                descricao: reqInput.descricao_da_tarefa,
                marcado: reqInput.isCheck,
            });
            console.log("Nova tarefa CRIADA : ", newTask);
            resolve({ statusCode: 302, Location: "/" });
        } catch (e) {
            console.log("Azedou: ", e);
            reject(e);
        }
    });
}
