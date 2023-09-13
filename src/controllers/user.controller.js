const userModel = require("../models/user.model")
const { ObjectId } = require('mongodb');

// Check if a string is a valid ObjectID
function isValidObjectId(idString) {
    return ObjectId.isValid(idString);
}

exports.createUser = async (req, res) => {
    const userInfo = req.body
    try {
        const createUser = await userModel.create(userInfo)
        return res.status(200).json({
            Success: true, 
            message: createUser 
        })
    } catch (error) {
        res.status(500).json({ "Success": false, "message": error.message });
    }
}

exports.updateUser = async (req, res) => {
    const userInfo = req.body
    const id = req.params.user_id
    try {
        // check if id exists
        const checkUser = await userModel.findOne({_id: id})
        if (!checkUser) throw new Error("User ID stated does not exist")

        const updatedUser = await userModel.findByIdAndUpdate(id, userInfo, { 
            new: true
        })
        return res.status(200).json({
            Success: true, 
            message: updatedUser 
        })
    } catch (error) {
        res.status(500).json({ "Success": false, "message": error.message });
    }
}

exports.deleteUser = async (req, res) => {
    const id = req.params.user_id
    try {
        // check if id exists
        const checkUser = await userModel.findOne({_id: id})
        if (!checkUser) throw new Error("User ID stated does not exist")

        await userModel.findByIdAndDelete(id)
        return res.status(200).json({
            Success: true, 
            message: "User has been successfuly deleted" 
        })
    } catch (error) {
        res.status(500).json({ "Success": false, "message": error.message });
    }
}

exports.getUser = async (req, res) => {
    const id = req.params.user_id
    try {
        let checkUser
        // check if id exists
        if (isValidObjectId(id)){
            checkUser = await userModel.findOne({_id: id})
        } else {
            checkUser = await userModel.findOne({name: id})
        }
        if (!checkUser ) throw new Error("User Info stated does not exist")

        return res.status(200).json({
            Success: true, 
            message: "User fetched Successfully",
            data: checkUser
        })
    } catch (error) {
        res.status(500).json({ "Success": false, "message": error.message });
    }
}

exports.getAllUser = async (req, res) => {
    try {
        // check if id exists
        const fetchAll = await userModel.find()

        return res.status(200).json({
            Success: true, 
            message: "User fetched Successfully",
            data: fetchAll
        })
    } catch (error) {
        res.status(500).json({ "Success": false, "message": error.message });
    }
}