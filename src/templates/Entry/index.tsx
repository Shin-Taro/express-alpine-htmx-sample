import { Document } from "@shared/components/layouts/Document/"
import { Container } from "@shared/components/layouts/Container/"
import { EntryForm } from "@domain/user/components/features/EntryForm/"
import React from "react"

export const Entry = () => (
  <Document title="Entry">
    <Container>
      <section className="mt-16">
        <h2 className="text-2xl">Entry</h2>
        <p className="text-lg mt-10">This is a dummy user registration form. You can enter any string to log in.</p>
        <p className="text-lg mt-10">
          If you are already a registered member, please login from the{" "}
          <a href="/login" className="text-blue-500">
            login page
          </a>
        </p>
        <div className="mt-10">
          <EntryForm />
        </div>
        <div className="text-center mt-10">
          <a className="border-b-2 border-gray-500 pb-2 hover:opacity-70" href="/">
            ← back to Home
          </a>
        </div>
      </section>
    </Container>
  </Document>
)
