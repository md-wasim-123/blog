 



const deskbord = async (req, res) => {
    res.render("index", { user:req.session.email })
}

const page = (req, res) => {
    res.render("404")
}

module.exports = {
    deskbord, page
}