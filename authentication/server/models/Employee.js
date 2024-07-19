const mongoose = require('mongoose')
const { Schema } = mongoose;

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post",
        }
    ]
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel