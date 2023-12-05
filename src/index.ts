#!/usr/bin/env node

import http from "node:http"
import { app } from "./app"

const normalizePort = (value: string) => {
  const port = Number.parseInt(value, 10)

  if (Number.isNaN(port)) {
    return value
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

const port = normalizePort(process.env.PORT || "3000")

// error: Error だと方が合わない
const onError = (error: { syscall: unknown; code: unknown }) => {
  if (error.syscall !== "listen") {
    throw error
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`

  switch (error.code) {
    case "EACCES": {
      // eslint-disable-next-line no-console
      console.error(`${bind} requires elevated privileges`)
      process.exit(1)
      break
    }
    case "EADDRINUSE": {
      // eslint-disable-next-line no-console
      console.error(`${bind} is already in use`)
      process.exit(1)
      break
    }
    default: {
      throw error
    }
  }
}

const server = http.createServer(app)

const onListening = () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on http://localhost:${port}`)
}

app.set("port", port)

server.listen(port)
server.on("error", onError)
server.on("listening", onListening)
