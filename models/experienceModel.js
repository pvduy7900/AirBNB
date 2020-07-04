const mongoose = require("mongoose")

const experienceSchema = mongoose.Schema({

    title: {
        type: String,
        require: [true, "title is required"],
        trim: true
    },
    duration: {
        type: Number,
        required: [true, "daration is raquired"]
    },
    images: [{
        type: String,
        required: [true, "image is required"]
    }],
    
    country: [{
        country: {
            type: String
        },
        city: {
            type: String
        }
    }],
    rate: {
        type: Number,
        // required:[true,"price is required"]
    },
    tags: [{
        type: String,
        // required: [true, "tags is required"]
    }],
    description: {
        type: String,
        // required: [true, "Description is required"]
    },
    items: [{
        type: String,
        // required:[true, "items is required"]
    }],
    
    groupSize: {
        type: Number,
        // required: [true, "groupSize is required"]
    }
}, {
    timestamps: true
})

const Experience = mongoose.model("Experience", experienceSchema)
module.exports = Experience