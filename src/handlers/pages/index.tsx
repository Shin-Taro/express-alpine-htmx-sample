import React from "react"
import express, { RequestHandler } from "express"
import { renderToString } from "react-dom/server"
import { addDocumentType } from "./modules/addDocumentType"

export const homeRoute = express.Router()

export const HomePageHandler: RequestHandler = (_, res) => {
  const html = renderToString(<img src="images/sample.jpeg" alt="test" />)
  res.send(addDocumentType(html))
}
