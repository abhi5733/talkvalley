const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
name:String,
primaryText:String,
headline:String,
description:String,
imageUrl:String
})

const userModel = mongoose.model("user",userSchema)

module.exports = {userModel}