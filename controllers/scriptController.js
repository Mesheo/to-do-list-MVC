const readFile = require("../utils/readfile.js");

async function script() {
    const data = await readFile("public/script.js");
    return { ContentType: "application/javascript", responseData: data };
}
module.exports = script;
