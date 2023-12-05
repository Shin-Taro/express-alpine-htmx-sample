import express, { RequestHandler } from "express"

export const homeRoute = express.Router()

const handler: RequestHandler = (_, res) => {
  res.send("Hello World!")
}

homeRoute.get("/", handler)
