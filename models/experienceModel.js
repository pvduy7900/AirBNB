const mongoose = require("mongoose")

const experienceSchema = mongoose.Schema({
    Host:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:[true,"host is required"]
    },
    title: {
        type: String,
        require: [true, "title is required"],
        trim: true
    },
    duration: {
        type: Number,
        // required: [true, "daration is raquired"]
    },
    groupSize: {
        type: Number,
        // required: [true, "groupSize is required"]
    },
    images: [{
        type: String
    }],
    description:{
        type:String,
        required:[true,"Description is required"]
    },
    items:[{
        type:String,
        // required:[true, "items is required"]
    }],
    price:{
        type:Number,
        // required:[true,"price is required"]
    },
    country:{
        city: String,
        country: String,
        // required:[true, "country is required"]
    },
    tags:{
        type:String
    }
})

const Experience = mongoose.model("Experience", experienceSchema)
module.exports = Experience