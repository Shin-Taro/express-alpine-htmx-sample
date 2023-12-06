import { ErrorDialog } from "@domain/user/components/features/EntryForm/components/elements/ErrorDialog"
import { SuccessDialog } from "@domain/user/components/features/EntryForm/components/elements/SuccessDialog"
import { User } from "@domain/user/model"
import { DefaultParametersDictionary } from "@shared/types/DefaultParametersDictionary"
import { RequestHandler } from "express"
import React from "react"
import { renderToString } from "react-dom/server"

export const registerApiHandler: RequestHandler<DefaultParametersDictionary, string, User> = async (req, res) => {
  const data = req.body
  const { email, name, address, password } = data
  const isValid = Boolean(email) && Boolean(password) && Boolean(name) && Boolean(address)

  if (isValid) {
    const SuccessDialogHtml = renderToString(<SuccessDialog />)

    res.setHeader("Set-Cookie", "user=dummy-user; Path=/;")
    return res.send(SuccessDialogHtml)
  }
  const ErrorDialogHtml = renderToString(<ErrorDialog />)

  return res.send(ErrorDialogHtml)
}
