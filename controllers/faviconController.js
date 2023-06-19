const readFile = require("../utils/readfile.js");

async function favicon() {
    const data = await readFile("public/favicon.ico");
    return { ContentType: "image/x-icon", responseData: data };
}
module.exports = favicon;
