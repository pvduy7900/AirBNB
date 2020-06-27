const Review = require("../models/review")

exports.getReviewList = async (request, response) => {
    try {
        const reviewList = await Review.find({})
        response.status(200).json({
            reviewList
        })
    } catch (error) {
        response.status(400).json({
            message: "Error happens"
        })
    }
}

exports.createReview = async (request, response) => {
    try {
        const { author, content } = request.body
        if (!author || !content) {
            return response.status(400).json({
                message: "author, content are required"
            })
        }

        const review = await Review.create({
            author: author,
            content: content
        })

        response.status(200).json({
            status: "success",
            data: review
        })

    } catch (error) {
        response.status(400).json({
            message: "Error happens"
        })
    }


}
