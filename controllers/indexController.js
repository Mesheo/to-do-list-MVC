const querystring = require("querystring");
const viewRenderer = require("../views/viewRenderer");

async function index(req, res) {
    if (req.method == "GET") {
        return await handleGetRequest(req, res);
    } else {
        return await handlePostRequest(req, res);
    }
}

module.exports = index;

async function handleGetRequest() {
    const htmlRendered = await viewRenderer.renderIndexView({});
    return { contentType: "text/html", responseData: htmlRendered };
}

function requestMiddleware(request) {
    return new Promise((resolve, reject) => {
        let inputData = "";
        request.on("data", (data) => {
            inputData += data.toString();
        });
        request.on("end", () => {
            inputData = querystring.parse(inputData);
            resolve(inputData);
        });
    });
}

async function handlePostRequest(req, res) {
    return new Promise(async (resolve, reject) => {
        const reqInput = await requestMiddleware(req);
        try {
            const htmlRendered = await viewRenderer.renderIndexView(reqInput);
            resolve({ contentType: "text/html", responseData: htmlRendered });
        } catch (e) {
            reject(err);
        }
    });
}
