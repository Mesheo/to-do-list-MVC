const ejs = require("ejs");

async function renderIndexView(tasksList) {
    const responseHtml = await ejs.renderFile("views/index.ejs", { tasksList });
    console.log("HTML renderizado no renderIndexView: ", responseHtml);
    return responseHtml;
}

module.exports = {
    renderIndexView,
};
