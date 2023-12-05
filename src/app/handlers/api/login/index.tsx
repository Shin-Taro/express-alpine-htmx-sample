import { ErrorDialog } from "@domain/user/components/features/LoginForm/components/elements/ErrorDialog"
import { SuccessDialog } from "@domain/user/components/features/LoginForm/components/elements/SuccessDialog"
import { User } from "@domain/user/model"
import { DefaultParametersDictionary } from "@shared/types/DefaultParametersDictionary"
import { RequestHandler } from "express"
import React from "react"
import { renderToString } from "react-dom/server"

export const loginApiHandler: RequestHandler<DefaultParametersDictionary, string, User> = async (req, res) => {
  const data = req.body
  const { email } = data
  const { password } = data
  const isValid = Boolean(email) && Boolean(password)

  if (isValid) {
    const SuccessDialogHtml = renderToString(<SuccessDialog />)

    res.setHeader("Set-Cookie", "user=dummy-user; Path=/;")
    res.send(SuccessDialogHtml)
  }
  const ErrorDialogHtml = renderToString(<ErrorDialog />)

  res.send(ErrorDialogHtml)
}
