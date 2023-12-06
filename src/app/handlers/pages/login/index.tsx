import React from "react"
import express, { RequestHandler } from "express"
import { renderToString } from "react-dom/server"
import { isLoggedIn as getIsLeggedInState } from "@domain/user/modules/isLoggedIn"
import { Login } from "@templates/Login"
import { addDocumentType } from "../modules/addDocumentType"

export const homeRoute = express.Router()

export const LoginPageHandler: RequestHandler = async (req, res) => {
  const isLoggedIn = await getIsLeggedInState(req.cookies)

  if (isLoggedIn) {
    return res.redirect("/mypage")
  }

  const html = renderToString(<Login />)
  return res.send(addDocumentType(html))
}
