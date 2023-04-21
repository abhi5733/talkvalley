const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
name:String,
primaryText:String,
headline:String,
description:String,
imageUrl:String
})

userSchema.index({ name: "text", primaryText: "text", headline: "text", description: "text" })

const userModel = mongoose.model("user",userSchema)

module.exports = {userModel}