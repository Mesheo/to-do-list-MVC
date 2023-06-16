const ejs = require("ejs");

async function renderIndexView(data) {
    const responseHtml = await ejs.renderFile("views/index.ejs", {
        user_text: data.dados_do_formulario,
    });
    console.log("HTML renderizado no renderIndexView: ", responseHtml);
    return responseHtml;
}

module.exports = {
    renderIndexView,
};
