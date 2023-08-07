require('dotenv').config();
const mongoose = require("mongoose");

const connectToDb = () => {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> {console.log("INFO - [DATABASE] MongoDB succesfully connected!")})
    .catch(e => console.log("Deu ruim a conexão no banco!: ", e));
}

module.exports = connectToDb;
