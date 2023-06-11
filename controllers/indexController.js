// indexController.js
const querystring = require("querystring");
const ejs = require("ejs");

async function index(req, res) {
    return new Promise((resolve, reject) => {
        if (req.method == "GET") {
            ejs.renderFile(
                "views/index.ejs",
                {},
                {},
                function (err, str) {
                    if (err){
                        reject(err);
                    }
                    else{
                        resolve({ contentType: "text/html", response: str });
                    }
                }
            );
        } else if (req.method == "POST") {
            let inputData = "";
            req.on("data", (data) => {
                inputData += data.toString();
            });
            req.on("end", () => {
                const formData = querystring.parse(inputData);
                console.log("-- DADOS da chamada: ", formData);
                ejs.renderFile(
                    "views/index.ejs",
                    { user_text: formData.dados_do_formulario },
                    {},
                    function (err, str) {
                        if (err){
                            reject(err);
                        }
                        else{
                            resolve({ contentType: "text/html", response: str });
                        }
                    }
                );
            });
        }
    });
}
module.exports = index;
