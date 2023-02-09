import express from "express";
import { googleAuth, signin, signup} from "../controllers/auth.js";

const router = express.Router();

//Requests

//Create user
router.post("/signup", signup)

//Sign In
router.post("/signin", signin)

//autenticação com google
router.post("/google", googleAuth)

export default router;