import User from "../models/User.js";

// create user
export const createUser = async (req, res) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();

        res.status(200).json({ success: true, message: "Successfully", data: savedUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed" });
    }
};

// update user 
export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json({ success: true, message: "Successfully", data: updatedUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed" });
    }
};

// delete user
export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: "Successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed" });
    }
};

// get single user
export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id);

        res.status(200).json({ success: true, message: "Successfully", data: user });
    } catch (error) {
        res.status(404).json({ success: false, message: "Failed" });
    }
};

// get all users
export const getAllUsers = async (req, res) => {

    try {
        const users = await User.find({});

        res.status(200).json({ success: true, message: "Successfully", data: users });
    } catch (error) {
        res.status(404).json({ success: false, message: "Failed" });
    }
};