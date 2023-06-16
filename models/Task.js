const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true,
    },
    marcado: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

const taskModel = mongoose.model("Task", taskSchema);

module.exports = taskModel;
