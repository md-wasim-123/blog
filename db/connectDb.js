const mongoose = require("mongoose")

const Database = async (db) => {
    try {
        await mongoose.connect(db)

        console.log("successfully connection...!")
    } catch (error) {
        console.log(error)
    }


}

module.exports = Database