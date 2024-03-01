const mongoose = require('mongoose');
const { string } = require('zod');

mongoose.connect('mongodb+srv://av1710334:KXFvqxbwCs0QaqoQ@cluster0.rxdzdmx.mongodb.net/TodoApp');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports = {
    todo
}