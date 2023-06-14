const querystring = require("querystring");
const ejs = require("ejs");

async function handleGetRequest() {
    const str = await ejs.renderFile("views/index.ejs", {});
    return { contentType: "text/html", response: str };
}

async function handlePostRequest(req, res) {
    return new Promise(async (resolve, reject) => {
        console.log("cheguei?");
        let inputData = "";

        req.on("data", (data) => {
            inputData += data.toString();
        });

        req.on("end", async () => {
            const formData = querystring.parse(inputData);
            console.log("-- DADOS da chamada: ", formData);
            try {
                const str = await ejs.renderFile("views/index.ejs", {
                    user_text: formData.dados_do_formulario,
                });
                resolve({ contentType: "text/html", response: str });
            } catch (e) {
                reject(err);
            }
        });
    });
}

async function index(req, res) {
    if (req.method == "GET") {
        return await handleGetRequest(req, res);
    } else {
        return await handlePostRequest(req, res);
        return new Promise(async (resolve, reject) => {
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
                        if (err) {
                            reject(err);
                        } else {
                            resolve({
                                contentType: "text/html",
                                response: str,
                            });
                        }
                    }
                );
            });
        });
    }
}

module.exports = index;
