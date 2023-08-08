const viewRenderer = require("../utils/viewRenderer");
const taskModel = require("../models/Task");

async function editTask(body) {
    console.log(`INFO - [Controller -> Model] EditTask: Requesting changes within task info to the MODEL...`)
    updateParams = {
        descricao: body.descricao_da_tarefa,
        marcado: body.isCheck,
    };
    const updateTask = await taskModel.updateOne(
        { _id: body.taskId },
        updateParams
    );
    console.log("INFO - [Controller] EditTask: Task updated: ", updateTask)
    return { statusCode: 302, Location: "/" };
}

async function getTaskById(body) {
    try{    
        const { taskId } = body;
        console.log(`INFO - [Controller -> Model] GetTaskById: Requesting info about task to the MODEL...`)
        if (
            !body.taskId.includes("script.js") &&
            !body.taskId.includes("style.css")
        ) {
            task = await taskModel.findById(taskId);
            console.log(`INFO - [Controller] GetTaskById: Task recieved ${task}`)
        }
    }catch(e){
        console.log("ERROR - [Controller] GetTaskById: Something went wrong trying to fetch database info: ", e)
    }

    const statusCode = 200;
    const ContentType = "text/html";
    let responseData;

    console.log("INFO - [Controller -> View] GetTaskById: Sending task info to the View")
    responseData = await viewRenderer.renderIndexView(task);
    return { responseData, statusCode, ContentType };
}

async function getAllTasks() {
    try {
        console.log(`INFO - [Controller -> Model] GetAllTasks: Requesting info about tasks to the MODEL...`)
        const tasksList = await taskModel.find();
        console.log("INFO - [Controller] GetAllTasks: Tasks recieved ",tasksList)
        console.log(`INFO - [Controller -> View] GetAllTasks: Sending tasks info to the View`)
        const responseData = await viewRenderer.renderIndexView(tasksList);
        return { ContentType: "text/html", responseData };
    } catch (e) {
        console.log("ERROR - [Controller] GetAllTasks: Something went wrong trying to fetch database info: ", e)
        return { statusCode: 500, responseData: e };
    }
}

async function createTask(body) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(`INFO - [Controller -> Model] CreateTask: Attempting to create new task inside the MODEL...`)
            if (!body.descricao_da_tarefa) {
                console.log("WARNING - [Controller] CreateTask: Cannot create task with empty description", body)
                resolve({ statusCode: 302, Location: "/" });
            } else {
                const newTask = await taskModel.create({
                    descricao: body.descricao_da_tarefa,
                    marcado: body.isCheck,
                });
                console.log("INFO - [Controller] CreateTask: New task successfully created: ", newTask)
            }
            resolve({ statusCode: 302, Location: "/" });
        } catch (e) {
            console.log("ERROR - [Controller] CreateTask: Something went wrong trying to create new item on the database: ", e)
            reject(e);
        }
    });
}

async function deleteTask(body) {
    console.log(`INFO - [Controller -> Model] DeleteTask: Attempting to delete task ${body.taskId} from the MODEL...`)
    try {
        const taskId = body.taskId;
        const deletedTask = await taskModel.deleteOne({ _id: taskId });
        console.log("INFO - [Controller] DeleteTask: Task deleted: ", deletedTask)
    } catch (e) {
        console.log("ERROR - [Controller] DeleteTask: Something went wrong when attempting to delete task ${body.taskId} from the database", e)
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
