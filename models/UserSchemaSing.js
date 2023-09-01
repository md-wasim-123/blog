const mongoose = require("mongoose")


const SchemaSingup = new mongoose.Schema({
    fname: { type: String, required: true, trim: true },
    lname: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true }
})

const userModel = mongoose.model("singup", SchemaSingup)
// module.exports={userModel}
module.exports = userModel;