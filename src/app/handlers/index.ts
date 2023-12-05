import express from "express"
import { HomePageHandler } from "./pages"
import { LoginPageHandler } from "./pages/login"

export const router = express.Router()

router.get("/", HomePageHandler)
router.get("/login", LoginPageHandler)
