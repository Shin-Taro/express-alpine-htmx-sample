import React from "react"
import express, { RequestHandler } from "express"
import { renderToString } from "react-dom/server"
import { Home } from "@templates/Home"
import { fetchNews } from "@domain/news/modules/fetchNews"
import { isLoggedIn as getIsLeggedInState } from "@domain/user/modules/isLoggedIn"
import { addDocumentType } from "./modules/addDocumentType"

export const homeRoute = express.Router()

export const HomePageHandler: RequestHandler = async (req, res) => {
  const news = await fetchNews()
  const isLoggedIn = await getIsLeggedInState(req.cookies)
  const dependencies = { news, isLoggedIn }

  const html = renderToString(<Home {...dependencies} />)
  res.send(addDocumentType(html))
}
