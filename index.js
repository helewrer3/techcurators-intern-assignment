//REQUIRE
const express = require('express');
const {authorize} = require('./controller');
const router = require('./route');

//variables
const app = express();
const PORT = process.env.PORT || 5000;

//routes
app.use('/', router);

//driver
async function startup(){
    try {
        await authorize();
        app.listen(PORT, () => console.log(`Connected to http://localhost:${PORT}/`));
    } catch (error) {
        console.log(error);
    }
}

startup();