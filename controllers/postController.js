const userpost = require("../models/post.js")

const postUser = (req, res) => {
  // Check if the user's email is stored in the session
  if (req.session.email) {
    // Render the "post" view and pass the user's email as a variable
    res.render("post", { user: req.session.email });
} else {
    // If the user is not logged in, render the "login" view
    res.redirect("/login");
}
    // console.log(req.body.titel)
}


const createpost = async (req, res) => {
    try {
        // const { title, des } = req.body
        const { title, des } = req.body;
        const user = new userpost({
            title: title,
            image: req.file.filename,
            des: des
        });
       // Save the post data to the database
       const savedPost = await user.save();
       req.session.id=savedPost._id
       console.log(savedPost)
      res.redirect("/blog")

    } catch (error) {
        console.log(error)
    }
}





module.exports = {
    postUser, createpost
}