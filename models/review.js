const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    author:{
        type:String,
        required: [true, "author is required"]
    },
    content:{
        type:String,
        required: [true, "content is required"]
    }
})

const Review = mongoose.model("Review" , reviewSchema)
module.exports = Review;