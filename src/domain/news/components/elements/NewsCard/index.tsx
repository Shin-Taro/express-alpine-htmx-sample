import type { News } from "@domain/news/model"
import React from "react"

type Props = News

export const NewsCard = ({ id, title, summary, createdAt }: Props) => (
  <article className="rounded-md border-2 border-gray-300 py-4 px-6">
    <a href={`/news/${id}`} className="hover:text-gray-500">
      <header>
        <h3 className="text-xl">{title}</h3>
        <p className="text-base text-gray-500">{createdAt}</p>
      </header>
      <p className="text-lg mt-2">{summary}</p>
    </a>
  </article>
)
