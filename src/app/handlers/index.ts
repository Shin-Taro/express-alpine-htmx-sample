import express from "express"
import { homePageHandler } from "./pages"
import { loginPageHandler } from "./pages/login"
import { entryPageHandler } from "./pages/entry"
import { myPageHandler } from "./pages/mypage"
import { loginApiHandler } from "./api/login"
import { logoutApiHandler } from "./api/logout"
import { registerApiHandler } from "./api/register"

export const router = express.Router()

router.get("/", homePageHandler)
router.get("/login", loginPageHandler)
router.get("/entry", entryPageHandler)
router.get("/mypage", myPageHandler)

router.post("/api/login", loginApiHandler)
router.post("/api/logout", logoutApiHandler)
router.post("/api/register", registerApiHandler)
