import express from "express"
import { HomePageHandler } from "./pages"
import { LoginPageHandler } from "./pages/login"
import { EntryPageHandler } from "./pages/entry"
import { MyPageHandler } from "./pages/mypage"

export const router = express.Router()

router.get("/", HomePageHandler)
router.get("/login", LoginPageHandler)
router.get("/entry", EntryPageHandler)
router.get("/mypage", MyPageHandler)
