const User = require("../models/user")
const { generateToken, loginWithEmail } = require("../services/authenticationServiec")
const bcrypt = require("bcrypt")
// lấy dữ liệu nên hơi khác
exports.getUserList = async (request, response) => {
    try {
        const userList = await User.find({}) // lấy hết tat ca
        response.status(200).json({
            userList
        })
    } catch (error) {
        response.status(400).json({
            message: "Error happens"
        })
    }
}
// try co vấn đề thì catch bắt đầu chạy


// tạo ra 1 cái dữ liệu
exports.createUser = async (request, response) => {
    try {
 

        const { name, email, password } = request.body
        if (!name || !email || !password) {
            return response.status(400).json({
                message: "name, email, password are required"
            })
        }
        const hashedPassword = await bcrypt.hash(request.body.password, 10)

        const user = await User.create({
            email: email,
            name: name,
            password: hashedPassword
        })

        const token = await generateToken(user)

        response.status(200).json({
            status: "success",
            data: { user, token }
        })

    } catch (error) {
        response.status(400).json({
            message: error.message
        })
    }
}


exports.login = async (request, response) => {
    try {
        // 1.check the validiti of data
        const { email, password } = request.body
        if (!email || !password) throw new Error("email or password are required")

        const user = await loginWithEmail(email, password)
        console.log(user)
        const token = await generateToken(user)

        response.status(200).json({
            status: "success",
            data: { user, token }
        })
    } catch (error) {
        response.status(400).json({
            message: error.message
        })
    }
}