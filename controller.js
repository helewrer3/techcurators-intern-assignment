//require
const mongoose = require('mongoose');
const {google} = require('googleapis');
const Question = require('./question');
const keys = require('./keys.json');

//variables
const client = new google.auth.JWT(keys.client_email, null, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']);

//authorization
async function authorize(){
    try {
        await mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});
        await client.authorize();
        console.log('Connected to DB and google sheet');
    } catch (error) {
        console.log(error);
    }
}

//saving data to DB
async function savetoDB(){
    try {
        const data = await gsrun();
        data.forEach(async element => {
            const question = new Question({
                topic: element[0],
                difficulty: element[1],
                statement: element[2],
                option: element.slice(3, -1),
                correct: element[element.length - 1]
            });
            const findStatus = await Question.findOne({ statement: element[2] }).exec();
            if(findStatus) console.log(`${element[2]} already saved`);
            else{
                await question.save();
                console.log(`${element[2]} saved`);
            }
        });
    } catch (error) {
        console.log(error);
    }
}

//accessing sheet data
async function gsrun(){
    try {
        const gsapi = google.sheets({version:'v4', auth: client});
        const opt = {
            spreadsheetId: keys.spreadsheetId,
            range: 'Questions!A1:H'
        };
        let data = await gsapi.spreadsheets.values.get(opt);
        return data.data.values.slice(1);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    authorize: authorize,
    gsrun: gsrun,
    savetoDB: savetoDB
};