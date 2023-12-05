import { Document } from "@shared/components/layouts/Document"
import { Header } from "@domain/user/components/elements/Header"
import { Container } from "@shared/components/layouts/Container"
import React, { FC } from "react"
import { User } from "@domain/user/model"
import { TabInterface } from "./components/features/TabInterface"

type Props = User

export const MyPage: FC<Props> = (props) => (
  <Document title="my page">
    <Header isLoggedIn />
    <Container>
      <section className="mt-16">
        <h2 className="text-2xl">User information</h2>
        <div className="mt-10">
          <TabInterface {...props} />
        </div>
      </section>
    </Container>
  </Document>
)
