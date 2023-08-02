const readFile = require("../utils/readfile.js");

async function font() {
    const responseData = await readFile("public/fonts/VCR_OSD_MONO_1.001.ttf");
    return { ContentType: "font/ttf", responseData };
}
module.exports = font;
