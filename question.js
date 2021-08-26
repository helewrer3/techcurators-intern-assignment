const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    topic: String,
    difficulty: String,
    statement: String,
    option: [{type: String}],
    correct: Number
})

const Question = mongoose.model('question', QuestionSchema);

module.exports = Question;