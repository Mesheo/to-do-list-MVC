const ejs = require("ejs");

async function renderIndexView(tasksList) {
    const responseHtml = await ejs.renderFile("views/index.ejs", { tasksList });
    console.log(`INFO - [View] RenderIndexView: HTML successfully generated from taskList info`)
    return responseHtml;
}

module.exports = {
    renderIndexView,
};
