import User from "../models/User.js";

export async function createUser(req, res) {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).json(user)
    } catch (err) {
        res.status(400).json({
            message: "Erro create User",
            err
        })
    }
}

export async function listUser(req, res) {
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({
            message: "Erro find Users",
            err
        })
    }
}

export async function updateUser(req, res) {
    try {
        const { id } = req.params
        const userUpdate = await User.findByIdAndUpdate(id, req.body, {
            new: true,
        })
        if (!userUpdate) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        res.status(200).json(userUpdate)
    } catch (err) {
        res.status(400).json({
            message: "Erro updating user"
        })
    }
}

export async function deleteUser(req, res) {
    try {
        const { id } = req.params
        const userDelete = await User.findByIdAndDelete(id)
        if (!userDelete) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        res.status(200).json({
            message: "User deleting with success"
        })
    } catch (err) {
        res.status(500).json({
            message: "Erro deleting user"
        })
    }
}

export default {
    createUser,
    listUser,
    updateUser,
    deleteUser
}