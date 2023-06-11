const querystring = require("querystring");
const readFile = require("../utils/readfile.js");


async function index(req, res) {
    if (req.method == "GET") {
        const data = await readFile("views/index.ejs");
        return { contentType: "text/html", response: data };
    } else if (req.method == "POST") {
        req.on("data", (data) => {
            inputData = data.toString();
            console.log("-- DADOS da chamada: ", querystring.parse(inputData));
        });
        const response = `
            <script>
                alert('Obrigado por enviar o formulario!');
                window.location.href="/";
            </script>
        `;
        return { contentType: "text/html", response };
    }
}
module.exports = index;
