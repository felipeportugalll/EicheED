import express from "express";
import {update, deleteUser, getUser,} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//atualizar usuário
router.put("/:id", verifyToken, update);

//deletar usuário
router.delete("/:id", verifyToken, deleteUser);

//achar usuário
router.get("/find/:id", getUser);


export default router;