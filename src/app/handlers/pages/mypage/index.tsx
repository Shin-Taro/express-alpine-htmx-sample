import React from "react"
import express, { RequestHandler } from "express"
import { renderToString } from "react-dom/server"
import { isLoggedIn as getIsLeggedInState } from "@domain/user/modules/isLoggedIn"
import { MyPage } from "@templates/MyPage"
import { fetchUser } from "@domain/user/modules/fetchUser"
import { addDocumentType } from "../modules/addDocumentType"

export const homeRoute = express.Router()

export const MyPageHandler: RequestHandler = async (req, res) => {
  const isLoggedIn = await getIsLeggedInState(req.cookies)

  if (!isLoggedIn) {
    return res.redirect("/login")
  }

  const user = await fetchUser()

  const html = renderToString(<MyPage {...user} />)
  return res.send(addDocumentType(html))
}
