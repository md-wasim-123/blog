const user = require("../models/UserSchemaSing.js")
const bcrypt = require('bcrypt');
const saltRounds = 10;




const usersingup = (req, res) => {
    res.render("signup", { msg: req.flash('msg') })

}


//user registeration

const userSingUpVerification = async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
        const { fname, lname, email, password, Cpassword } = req.body;
        const avatarUrl = `https://api.multiavatar.com/${(fname)}.svg`;
        console.log(avatarUrl)
        if (fname == "" || lname == "" || email == "" || password == "" || Cpassword == "") {
            req.flash("msg", "All fields are required fill the information in sign up 😮😮😮😮😮.");
            return res.redirect('/signup');  // Use return to prevent further execution
        } else if (password !== Cpassword) {
            req.flash("msg", "Passwords do not match.");
            return res.redirect('/signup');  // Use return to prevent further execution
        } else {
            const userFind = await user.findOne({ email: email })
            if (userFind) {
                req.flash("msg", "User already exists.");
                return res.redirect('/signup');  // Use return to prevent further execution
            }
            else {
                const doc = new user({
                    fname: fname,
                    lname: lname,
                    email: email,
                    image: avatarUrl,
                    password: hashPassword  // Store the hashed password, not the plain password
                })
                const result = await doc.save()
                console.log(result);
                req.session.email = result
                req.session.fname = result.fname
                req.session.id =doc._id

                // console.log(req.session._id)
                // console.log(req.session);
                return res.redirect('/');
            }
        }

    } catch (error) {
        console.log(error)
    }

}






















module.exports = {
    usersingup, userSingUpVerification
}