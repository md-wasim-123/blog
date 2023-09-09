// const userpost = require("../models/post.js")
// const post = require('../models/post.js')




const deskbord = async (req, res) => {
    // console.log(req.session.email +"hhhhhhhhhhhhhhhhhhh")
    res.render("index", { user:req.session.email })
}

const page = (req, res) => {
    res.render("404")
}

module.exports = {
    deskbord, page
}