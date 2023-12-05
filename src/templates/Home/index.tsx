import { Document } from "@shared/components/layouts/Document"
import { Header } from "@domain/user/components/elements/Header"
import { ImageCarousel } from "@shared/components/features/ImageCarousel"
import { Container } from "@shared/components/layouts/Container"
import { NewsCard } from "@domain/news/components/elements/NewsCard"

import type { News } from "@domain/news/model"
import React, { FC } from "react"
import { CarouseImages } from "./const/CarouselImages"

type Props = {
  isLoggedIn: boolean
  news: News[]
}

export const Home: FC<Props> = ({ isLoggedIn, news }) => (
  <Document title="HOME">
    <Header isLoggedIn={isLoggedIn} />
    <Container>
      <p className="text-3xl text-center">Well come to sample web page. This is Top page.</p>
      <section className="mt-16">
        <h2 className="text-2xl">Dummy carousel</h2>
        <div className="mt-10">
          <ImageCarousel images={CarouseImages} />
        </div>
      </section>
      <section className="mt-16">
        <h2 className="text-2xl">News</h2>
        <ul className="mt-10">
          {news.map((item) => (
            <li key={item.id} className="[&:not(:first-child)]:mt-4">
              <NewsCard {...item} />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  </Document>
)
