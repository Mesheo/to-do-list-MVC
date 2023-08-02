const querystring = require("querystring");
const viewRenderer = require("../utils/viewRenderer");
const taskModel = require("../models/Task");

async function editTask(body) {
    console.log("Updating task and redirecting to HomePage: ", body);
    updateParams = {
        descricao: body.descricao_da_tarefa,
        marcado: body.isCheck,
    };
    const updateTask = await taskModel.updateOne(
        { _id: body.taskId },
        updateParams
    );
    console.log("Task UPDATED: ", updateTask);
    return { statusCode: 302, Location: "/" };
}

async function getTaskById(body) {
    const { taskId } = body;
    console.log("!!GETtaskById recebeu o body:", body);

    if (
        !body.taskId.includes("script.js") &&
        !body.taskId.includes("style.css")
    ) {
        task = await taskModel.findById(taskId);
        console.log("###### A TASK PEGUEI VC SAFADA: ", task);
    }

    const statusCode = 200;
    const ContentType = "text/html";
    let responseData;

    responseData = await viewRenderer.renderIndexView(task);
    return { responseData, statusCode, ContentType };
}

async function getAllTasks() {
    try {
        const tasksList = await taskModel.find();
        console.log("GetAllTasks controller recuperou as tasks: ", tasksList);

        const htmlRendered = await viewRenderer.renderIndexView(tasksList);
        return { ContentType: "text/html", responseData: htmlRendered };
    } catch (e) {
        console.log("Algo deu errado pegando tasks do banco: ", e);
        return { statusCode: 500, responseData: e };
    }
}

async function createTask(body) {
    return new Promise(async (resolve, reject) => {
        try {
            if(!body.descricao_da_tarefa){
                console.log("!!CreateTask Controller cannot create empty task", body);
                resolve({ statusCode: 302, Location: "/" });
            }
            else{
                const newTask = await taskModel.create({
                    descricao: body.descricao_da_tarefa,
                    marcado: body.isCheck,
                });
                console.log("Nova tarefa CRIADA : ", newTask);
            }
            resolve({ statusCode: 302, Location: "/" });
        } catch (e) {
            console.log("Azedou: ", e);
            reject(e);
        }
    });
}

async function deleteTask(body) {
    const taskId = body.taskId;
    console.log("Vou apagar a task de id: ", taskId);

    const deletedTask = await taskModel.deleteOne({ _id: taskId });
    console.log("Task DELETED: ", deletedTask);

    return { statusCode: 302, Location: "/" };
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    editTask,
    deleteTask,
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
