const user = require("../models/UserSchemaSing.js")
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userLogin = (req, res) => {
    if (req.session.email) {
        res.redirect("/");
    }
    else {
        res.render("login", { msg: req.flash('msg') })
    }

}


const verificationLoginUser = async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
        const { email, password } = req.body
        //check the 
        if (email == "" || password == "") {
            req.flash("msg", "All Feild Require fill the information in login page 😮😮😮😮 ")
            return res.redirect("/login")
        }
        else {
            const find = await user.findOne({ email: email })
            if (find != null) {
                const isMatch = await bcrypt.compare(req.body.password, find.password)
                if (find.email === email && isMatch) {
                    // console.log(find._id)
                    req.session.fname = find.fname
                    req.session.email = email
                    // console.log(req.session);
                    return res.redirect("/")
                } else {
                    req.flash("msg", "Email And Password Are Not Match🔑🔑🔑🔑🔑🔑")
                    return res.redirect("/login")
                }
            }
            else {
                req.flash("msg", "User Not Exist Pleses Sing up your accounte🥹🥹🥹🥹🥹🥹")
                return res.redirect("/signup")
            }
        }

    } catch (error) {
        console.log(error)
    }
}


const logoutuser = (req, res) => {
    // Clear the session or req.user to log the user out
    req.session.destroy((error) => {
        if (error) {
            console.log(error)
        }
        res.redirect('/');
    })

}






module.exports = {
    userLogin, verificationLoginUser, logoutuser
}