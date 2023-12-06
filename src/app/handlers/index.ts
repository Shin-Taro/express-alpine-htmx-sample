import express from "express"
import { HomePageHandler } from "./pages"
import { LoginPageHandler } from "./pages/login"
import { EntryPageHandler } from "./pages/entry"
import { MyPageHandler } from "./pages/mypage"
import { loginApiHandler } from "./api/login"
import { logoutApiHandler } from "./api/logout"
import { registerApiHandler } from "./api/register"

export const router = express.Router()

router.get("/", HomePageHandler)
router.get("/login", LoginPageHandler)
router.get("/entry", EntryPageHandler)
router.get("/mypage", MyPageHandler)

router.post("/api/login", loginApiHandler)
router.post("/api/logout", logoutApiHandler)
router.post("/api/register", registerApiHandler)
