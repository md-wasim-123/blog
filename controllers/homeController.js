const userpost = require("../models/post.js")
const post = require('../models/post.js')
const deskbord = async (req, res) => {
    // const postData = await post.find(); // Fetch all posts from the "post" collection
    // const images = postData.map(post => post.image); // Extract image URLs from the fetched data
    // console.log(images); // Log the array of image URLs

    res.render("index", { user:req.session.email })
}

// const avataruser = (req, res) => {
//     console.log(req.params.fname)
// }

const page = (req, res) => {
    res.render("404")
}



module.exports = {
    deskbord, page
}