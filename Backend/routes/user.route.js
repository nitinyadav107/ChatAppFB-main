import express from "express";
import { getUser, login,logout,signup,VerfiyEmail } from "../controller/user.controller.js";
const router=express.Router();
router.post("/signup",signup)
router.post("/login",login)
router.get("/getUser",getUser)
router.post('/verifyemail',VerfiyEmail
);
router.post("/logout",logout)

export default router;