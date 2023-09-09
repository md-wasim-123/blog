const express = require("express");
const multer = require('multer')
const router = express.Router()

// Importing controller modules
const home = require("../controllers/homeController.js")
const signup = require("../controllers/singup.js")
const login = require("../controllers/login.js")
const post = require("../controllers/postController.js")
const blog = require("../controllers/blogController.js")
const dashbord = require("../controllers/dashbord.js")
const user = require("../controllers/userController.js")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/post')
    },
    filename: function (req, fill, cb) {
        const datename = Date.now() + '-' + fill.originalname
        cb(null, datename)
    }
})
const upload = multer({ storage: storage })
// Routes with comments
router.get("/", home.deskbord)// Route to home dashboard
// router.get("/user/:id", home.avataruser) // Route to view user's avatar
router.get("/signup", signup.usersingup) // Route to user signup page
router.post("/signup", signup.userSingUpVerification)// Route to verify user signup
router.get("/login", login.userLogin) // Route to user login page
router.post("/login", login.verificationLoginUser)// Route to verify user login
router.get("/post", post.postUser) // Route to view posts
// router.get('/post/:id', post.viewPost)  ///Route for viewing a single post by id

router.post("/post", upload.single('image'), post.createpost) // Route to view posts
router.get("/blog", blog.blogPost) // Route to view blog posts
router.get("/dashbord/:id", dashbord.userdashbord) // Route to user dashboard
router.get("/dashbord/:id", dashbord.blogPostData) // Route to user dashboard
router.get("/logout", login.logoutuser)// Route to log out user
router.get("/user",user.userpro)
router.get("/user/edit/:id",user.userDataEdit)
router.put("/user/update/:id",user.userDataUpdate)
router.delete("/user/delete/:id",user.userDelete)
router.get("*", home.page)// Default route to home page


// Export the router for use in your main app
module.exports = router






