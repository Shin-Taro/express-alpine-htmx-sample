import type { News } from "@domain/news/model"

import { DummyNews } from "@domain/news/const/DummyNews"
import { sleep } from "@shared/modules/sleep"

export const fetchNews = async (): Promise<News[]> => {
  await sleep(1000)
  return DummyNews
}
