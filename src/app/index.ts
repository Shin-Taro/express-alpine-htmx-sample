/* eslint-disable unicorn/prefer-module */
import createError from "http-errors"

import express, { ErrorRequestHandler, NextFunction } from "express"
import cookieParser from "cookie-parser"

import logger from "morgan"
import { router } from "@app/handlers"

export const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static("src/public"))

// application registration
app.use("/", router)

// 404 handler
app.use((_, __, next: NextFunction) => {
  next(createError(404))
})

// error handler
const errorHandler: ErrorRequestHandler = (error, request, res) => {
  if (error instanceof Error) {
    res.locals.message = error.message
    res.locals.error = request.app.get("env") === "development" ? error : {}
  }
  res.status(500)
  res.render("error")
}
app.use(errorHandler)
