const mongoose = require("mongoose");

const connectToDb = () => {
    mongoose.connect("mongodb+srv://root:admin@todolistcluster.qtf6099.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> {console.log("MongoDB conectado!")})
    .catch(e => console.log("Deu ruim a conexão no banco!: ", e));
}

module.exports = connectToDb;