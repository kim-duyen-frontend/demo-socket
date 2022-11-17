import * as constrollers from "../controller";
import express from "express";

const router = express.Router();
router.post("/register", constrollers.register)
router.post("/login", constrollers.login)
module.exports = router;