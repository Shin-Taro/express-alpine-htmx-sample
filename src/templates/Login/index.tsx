import { Document } from "@shared/components/layouts/Document"
import { Container } from "@shared/components/layouts/Container"
import { LoginForm } from "@domain/user/components/features/LoginForm"
import React from "react"

export const Login = () => (
  <Document title="Login">
    <Container>
      <section className="mt-16">
        <h2 className="text-2xl">Login</h2>
        <p className="text-lg mt-10">This is a dummy login form. You can enter any string to log in.</p>
        <p className="text-lg mt-10">
          If you are not already a member, please register on the{" "}
          <a href="/entry" className="text-blue-500">
            entry page
          </a>
          .
        </p>
        <div className="mt-10">
          <LoginForm />
        </div>
      </section>
      <div className="text-center mt-10">
        <a className="border-b-2 border-gray-500 pb-2 hover:opacity-70" href="/">
          ← back to Home
        </a>
      </div>
    </Container>
  </Document>
)
