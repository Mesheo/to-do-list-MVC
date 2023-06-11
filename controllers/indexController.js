const querystring = require("querystring");
const servirBrowser = require("../utils/servirBrowser.js")

async function index(req, res) {
    if (req.method == "GET") {
        servirBrowser(res, "views/index.ejs", "text/html");
    } else if (req.method == "POST") {
        req.on("data", (data) => {
            inputData = data.toString();
            console.log("-- DADOS da chamada: ", querystring.parse(inputData));
        });
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <script>
                alert('Obrigado por enviar o formulario!');
                window.location.href="/";
            </script>
        `);
    }
}
module.exports = index;
