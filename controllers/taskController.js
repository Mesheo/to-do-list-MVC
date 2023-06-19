const querystring = require("querystring");
const viewRenderer = require("../utils/viewRenderer");
const taskModel = require("../models/Task");


//  const { statusCode, Location, ContentType, responseData } = await rotas[req.url](req);


async function editTask(req) {
    const id = req.url.replace("/editar/", "")
    console.log("OLHa a porra da requisicaokkkkk", id)
    const statusCode =200;
    const ContentType= "text/html";
    let responseData;

    responseData = await viewRenderer.renderIndexView(id)

    return {responseData, statusCode}

}

async function getAllTasks() {
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

async function createTask(req, res) {
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

module.exports = {
    getAllTasks,
    createTask,
    editTask,
};

function requestMiddleware(request) {
    return new Promise((resolve, reject) => {
        try {
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
        } catch (e) {
            console.log("Algo deu errado lendo o input: ", e);
            reject(e);
        }
    });
}
