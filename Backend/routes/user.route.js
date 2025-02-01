import express from "express";
import { getUser, login,signup } from "../controller/user.controller.js";
const router=express.Router();
router.post("/signup",signup)
router.post("/login",login)
router.get("/getUser",getUser)


export default router;