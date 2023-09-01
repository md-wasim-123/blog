// const userpost = require("../models/post.js")
const post = require('../models/post.js')

const blogPost = async (req, res) => {
    try {
        const posts = await post.find(); // Fetch all posts from the database
        const user = req.session.email; // Get the user's email from the session
        res.render("blog", { posts: posts, user: user })

    } catch (error) {
        console.log(error + "error blogPost ")
    }

}












module.exports = {
    blogPost
}