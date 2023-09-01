const mongoose = require("mongoose")

const userpost = new mongoose.Schema({ 
    title: String,
    image: String,
    des: String
})

const postModel = mongoose.model("post", userpost)
// module.exports={userModel}
module.exports = postModel;