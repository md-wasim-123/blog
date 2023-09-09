const mongoose = require("mongoose")

const userpost = new mongoose.Schema({ 
    title: String,
    image: String,
    des: String,
    fname:String,
    user: String,
    email:String,
    createdAt: {
        type: Date,
         // Set the default value to the current date and time
      }
})

const postModel = mongoose.model("post", userpost)
// module.exports={userModel}
module.exports = postModel;