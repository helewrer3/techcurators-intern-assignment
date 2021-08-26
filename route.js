//require
const express = require('express');
const Question = require('./Question');
const {savetoDB} = require('./controller');

//variables
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "welcome message": "API to take question data from a public google sheet and insert it into MongoDB database.",
        "credentials" : "All credentials are stored in <keys.json> file, private data would have been redacted had this not been an assignment project.",
        "routes": {"/": "Welcome Screen", "/all": "Getting all questions currently in the DB", "/save": "Saving all questions into DB, no duplicate questions are inserted."},
        "github": "https://github.com/helewrer3/techcurators-intern-assignment",
    });
})

router.get('/all', (req, res) => {
    Question.find({}, (err, data) => {
        if(err) res.send(404).json({"error message": err});
        else res.json(data);
    })
})

router.get('/save', async (req, res) => {
    try {
        await savetoDB();
        res.json({"Success Message": "Data saved"});
    } catch (error) {
        res.send(404).json({"error message": error});
    }

})

module.exports = router;