import express from "express";
import { deleteUser, getAllUsers, getSingleUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

// verifica se e um user ou admin 
import { verifyAdmin, verifyUser } from "../utils/tokenVesion.js";

router.put('/:id', verifyUser, updateUser);

router.delete('/:id', verifyUser, deleteUser);

router.get('/:id', verifyUser, getSingleUser);

router.get('/', verifyAdmin, getAllUsers);

export default router;