// const userpost = require("../models/post.js")
const post = require('../models/post.js')

const userdashbord = async (req, res) => {
    try {
<<<<<<< HEAD
        const user = req.session.email; // Get the user's email from the session
        const postdata = await post.findById(req.params.id)
        // console.log(postdata+"yyyyyyyyyyyyyyyyyyyyyyyyyy")
        res.render("dashbord", { postdata: postdata, user: user })
=======
     
            const user = req.session.email; // Get the user's email from the session
            // console.log(user)
            const postdata = await post.findById(req.params.id)
            // const posts = await post.find(); // Fetch posts from the database
            res.render("dashbord", { postdata: postdata, user: user })
    
>>>>>>> 7a9286604537cbd61a73c31636ae7168821098de
    } catch (error) {
        console.log(error)
    }

}
const blogPostData = async (req, res) => {
    try {
        const posts = await post.findById({ _id: req.session._id });
        console.log(posts)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    userdashbord, blogPostData
}
