const user = require("../models/UserSchemaSing.js")
const userpost = require("../models/post.js")


const postUser = (req, res) => {
<<<<<<< HEAD
    // Check if the user's email is stored in the session
    if (req.session.email) {
        // Render the "post" view and pass the user's email as a variable
        res.render("post", { user: req.session.email, msg: req.flash('msg') });
    } else {
        // If the user is not logged in, render the "login" view
        res.redirect("/login");
    }
=======
  // Check if the user's email is stored in the session
  if (req.session.email) {
    // Render the "post" view and pass the user's email as a variable
    res.render("post", { user: req.session.email ,msg: req.flash('msg')});
} else {
    // If the user is not logged in, render the "login" view
    res.redirect("/login");
}
>>>>>>> 7a9286604537cbd61a73c31636ae7168821098de
    // console.log(req.body.titel)
}

const createpost = async (req, res) => {
    try {
        // const { title, des } = req.body
        const { title, des } = req.body;
<<<<<<< HEAD


        console.log(title, des)
        if (!title || !des) {
=======
          if (!title || !des) {
>>>>>>> 7a9286604537cbd61a73c31636ae7168821098de
            req.flash("msg", "Fill in both title and description");
            return res.redirect("/post");
        }
        const user = new userpost({
            title: title,
            image: req.file.filename,
            des: des,
            fname:req.session.fname,
            user:req.session.email
        });
        // Save the post data to the database
        const savedPost = await user.save();
        req.session.id = savedPost._id
        // console.log(savedPost)
        res.redirect("/blog")

    } catch (error) {
        console.log(error)
    }
}





module.exports = {
    postUser, createpost
}
