const user = require('../models/UserSchemaSing.js')
const userpost = require("../models/post.js")

const userpro = async (req, res) => {
    try {
        const post = await userpost.find({ user: req.session.email })
        res.render("user", { user: req.session.email, finddata: post })
    } catch (error) {
        console.log(error)
    }
}

const userDataEdit = async (req, res) => {
    try {
        const userEdit = await userpost.findById({ _id: req.params.id })
        // console.log(userEdit+"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
        res.render("edit", {user: req.session.email, dat: userEdit })

    } catch (error) {
        console.log(error)
    }
}



const userDataUpdate = async (req, res) => {
    try {
        // console.log(req.body);

        const document = {
            title: req.body.title,
            des: req.body.des
        };

        const update = await userpost.findByIdAndUpdate(req.params.id, document, { new: true });

        if (!update) {
            console.log("Error in updating");
            // You might want to handle the error here, e.g., send an error response to the client
            return res.status(404).send("Error in updating");
        }

        console.log('update document', update);
        res.redirect('/user');
    } catch (error) {
        console.log(error.message);
        // You should handle the error here as well, e.g., send an error response to the client
        res.status(500).send("Internal Server Error");
    }
};

const userDelete = async (req, res) => {
    const del = await userpost.findByIdAndDelete(req.params.id)
    res.redirect('/user')
}

module.exports = {
    userpro, userDataEdit, userDataUpdate, userDelete
}