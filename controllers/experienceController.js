const Experience = require("../models/experienceModel")

exports.getAllExperience = async (request, response) =>{
    try{
        const experience = await Experience.find({})
        response.status(200).json({
            experience
        })
    }catch(error){
        return response.status(400).json({
            status: "Fail",
            message:"get information experience Fail"
        })
    }
}

exports.createExperience = async (request, response) => {
    try {

        const { title, description } = request.body

        if (!title || !description) {
            return response.status(400).json({
                message: error.message
            })
        }

        const experience = await Experience.create({
            title: title,
            description: description,
            Host: request.user._id
        })

        response.status(200).json({
            status: "Success",
            data: experience
        })

    } catch (error) {
        response.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}