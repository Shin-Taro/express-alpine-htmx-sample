import express from "express"
import { HomePageHandler } from "./pages"

export const router = express.Router()

router.get("/", HomePageHandler)
