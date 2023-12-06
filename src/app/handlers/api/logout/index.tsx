import { ErrorDialog } from "@domain/user/components/features/LogOutButton/components/elements/ErrorDialog"
import { SuccessDialog } from "@domain/user/components/features/LogOutButton/components/elements/SuccessDialog"
import { User } from "@domain/user/model"
import { DefaultParametersDictionary } from "@shared/types/DefaultParametersDictionary"
import { RequestHandler } from "express"
import React from "react"
import { renderToString } from "react-dom/server"

const PastDate = "Thu, 01 Jan 1970 00:00:00 GMT"

export const logoutApiHandler: RequestHandler<DefaultParametersDictionary, string, User> = async (req, res) => {
  const isValid = Object.prototype.hasOwnProperty.call(req.cookies, "user")

  if (isValid) {
    const SuccessDialogHtml = renderToString(<SuccessDialog />)

    res.setHeader("Set-Cookie", `user=; Path=/; Expires=${PastDate};`)
    return res.send(SuccessDialogHtml)
  }
  const ErrorDialogHtml = renderToString(<ErrorDialog />)

  return res.send(ErrorDialogHtml)
}
