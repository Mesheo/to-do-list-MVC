const querystring = require("querystring");
const viewRenderer = require("../utils/viewRenderer");
const taskModel = require("../models/Task");

async function editTask(body) {
    console.log("--EditTask ->  CONTROLLER requesting change within task info to the MODEL");
    updateParams = {
        descricao: body.descricao_da_tarefa,
        marcado: body.isCheck,
    };
    const updateTask = await taskModel.updateOne(
        { _id: body.taskId },
        updateParams
    );
    console.log("-EditTask ->  Task updated: ", updateTask);
    return { statusCode: 302, Location: "/" };
}

async function getTaskById(body) {
    try{    
        const { taskId } = body;
        console.log(
            "--GetTaskById ->  CONTROLLER requesting info about task to the MODEL"
        );
        if (
            !body.taskId.includes("script.js") &&
            !body.taskId.includes("style.css")
        ) {
            task = await taskModel.findById(taskId);
            console.log("--GetTaskById ->  Task recieved ", tasksList);
        }
    }catch(e){
        console.log(
            "!--GetAllTasks! ->  Something went wrong trying to fetch database info: ",
            e
        );
    }

    const statusCode = 200;
    const ContentType = "text/html";
    let responseData;

    responseData = await viewRenderer.renderIndexView(task);
    return { responseData, statusCode, ContentType };
}

async function getAllTasks() {
    try {
        console.log(
            "--GetAllTasks ->  CONTROLLER requesting info about tasks to the MODEL "
        );
        const tasksList = await taskModel.find();
        console.log("--GetAllTasks ->  Tasks recieved ", tasksList);

        const responseData = await viewRenderer.renderIndexView(tasksList);
        return { ContentType: "text/html", responseData };
    } catch (e) {
        console.log(
            "!--GetAllTasks! ->  Something went wrong trying to fetch database info: ",
            e
        );
        return { statusCode: 500, responseData: e };
    }
}

async function createTask(body) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(
                "--CreateTask ->  CONTROLLER attempting to create new task inside the MODEL "
            );
            if (!body.descricao_da_tarefa) {
                console.log(
                    "!--CreateTask! ->  Controller cannot create empty task",
                    body
                );
                resolve({ statusCode: 302, Location: "/" });
            } else {
                const newTask = await taskModel.create({
                    descricao: body.descricao_da_tarefa,
                    marcado: body.isCheck,
                });
                console.log(
                    "--CreateTask ->  New task successfully created: ",
                    newTask
                );
            }
            resolve({ statusCode: 302, Location: "/" });
        } catch (e) {
            console.log(
                "!--CreateTask! -> Something went wrong trying to create new item on the database: ",
                e
            );
            reject(e);
        }
    });
}

async function deleteTask(body) {
    console.log(
        `--DeleteTask ->  CONTROLLER attempting to delete task ${body.taskId} from the MODEL `
    );
    try {
        const taskId = body.taskId;
        const deletedTask = await taskModel.deleteOne({ _id: taskId });
        console.log("--DeleteTask ->  Task deleted: ", deletedTask);
    } catch (e) {
        console.log(
            `!--DeleteTask! ->  Something went wrong when attempting to delete task ${body.taskId} from the database`,
            e
        );
    }

    return { statusCode: 302, Location: "/" };
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    editTask,
    deleteTask,
};
