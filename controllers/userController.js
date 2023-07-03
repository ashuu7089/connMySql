const user = require('../models/userSchema')
const { sequelize } = require('sequelize');

// API for Create User
const createUser = async (req, res) => {
    try {
        let addUser = req.body;
        const userData = await user.create(addUser);
        res.status(200).json({
            success: true,
            message: "User created successfully",
            data: userData
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

//  API for getAllUser
const getAllUser = async (req, res) => {
    try {
        const getAllData = await user.findAll();
        res.status(200).json({
            success: true,
            message: "Show Data !",
            getAllData
        })
    } catch (error) {
        res.status(500).json({
            success: true,
            message: error
        })
    }
}

// API for get single user Data
const getSingleUser = async (req, res) => {
    try {
        const getSingleData = await user.findOne({
            where: {
                id: req.params.id,
            }
        })
        res.status(200).json({
            success: true,
            message: "Single data ",
            getSingleData
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

// API for update user
const updateUser = async (req, res) => {
    try {
        let renameUser = req.body;
        const updateData = await user.update(renameUser, {
            where: {
                id: req.params.id,
            }
        })
        res.status(200).json({
            success: true,
            message: "update successfully",
            updateData
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

// API for delete User
const deleteUser = async (req, res) => {
    try {
        const deleteData = await user.destroy({
            where: {
                id: req.params.id,
            }
        })
        res.status(200).json({
            success: true,
            message: "Data delete successfully",
            deleteData
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

module.exports = { createUser, getAllUser, getSingleUser, updateUser, deleteUser }
