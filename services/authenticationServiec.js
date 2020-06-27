const jwt = require("jsonwebtoken")
const User = require("../models/user")
const bcrypt = require("bcrypt")

exports.generateToken = async (user) => {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
    user.tokens.push(token)
    await user.save();
    return token;
}

exports.loginWithEmail = async (email, password) => {
    const user = await User.findOne({ email: email })

    if (!user) {
        throw new Error(`can not find user with email ${email}`)
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw new Error("ko đúng password")
    }
    return user
}

