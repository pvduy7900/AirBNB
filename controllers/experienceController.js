const Experience = require("../models/experienceModel")
const { response } = require("express")

exports.getAllExperience = async (request, response) => {
    try {
        const pageNumber = request.query.pageNumber
        const experienceList = await Experience.find({}).limit(25).skip((pageNumber - 1) * 25);
        console.log(pageNumber)
        response.status(200).json({
            status: "success",
            data: experienceList
        })
    } catch (error) {
        return response.status(400).json({
            status: "Fail",
            message: "get information experience Fail"
        })
    }
}

exports.createExperience = async (request, response) => {


    try {
        const { title, duration, images, country, rate } = request.body

        if (!title || !duration || !images || !country || !rate) {
            return response.status(400).json({
                message: error.message
            })
        }

        const newExperience = await Experience.create(
            request.body
        )

        response.status(200).json({
            status: "Success",
            data: newExperience
        })

    } catch (error) {
        response.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.findOneExperience = async (request, response) => {
    try {
        // why params
        const exp = await Experience.findOne({ _id: request.params.experienceId })
        if (!exp) throw new Error("No experience here");
        response.status(200).json({
            status: "Succes",
            data: exp
        })


    } catch (error) {
        response.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

// exports.updateExperience = async (request, response) => {
//     try {




//     } catch (error) {
// response.status(400).json({
//     status: "Fail",
//     message: error.message
// })
//     }
// }

// hok hieu ne
exports.updateExperience = async (request, response, next) => {
    const exp = await Experience.findOne({ _id: request.params.experienceId });
    if (!exp) { throw new Error("ko co exp") }

    const expFields = Object.keys(request.body);
    expFields.map(field => exp[field] = request.body[field]);
    await exp.save();

    response.status(200).json({
        status: "Success",
        data: exp
    });
};
