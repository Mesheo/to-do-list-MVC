const ejs = require("ejs");

async function renderIndexView(tasksList) {
    console.log("\n--- Sending from the controller to the view", tasksList);
    console.log("--------TIPOdessa porra: ", typeof tasksList);
    const responseHtml = await ejs.renderFile("views/index.ejs", { tasksList });
    // console.log("HTML renderizado no renderIndexView: ", responseHtml);
    return responseHtml;
}

module.exports = {
    renderIndexView,
};
