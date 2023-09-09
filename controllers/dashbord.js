// const userpost = require("../models/post.js")
const post = require('../models/post.js')

const userdashbord = async (req, res) => {
    try {
        const user = req.session.email; // Get the user's email from the session
        const postdata = await post.findById(req.params.id)
        // console.log(postdata+"yyyyyyyyyyyyyyyyyyyyyyyyyy")
        res.render("dashbord", { postdata: postdata, user: user })
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
