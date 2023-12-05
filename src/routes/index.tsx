import { Home } from "@pages"
import express, { RequestHandler } from "express"
import React from "react"
import { renderToString } from "react-dom/server"

export const homeRoute = express.Router()

const handler: RequestHandler = (_, res) => {
  const html = renderToString(<Home />)
  res.send(html)
}
homeRoute.get("/", handler)
