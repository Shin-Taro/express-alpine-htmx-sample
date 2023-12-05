import type { News } from "@domain/news/model"

const summary = "Dummy news summary. Dummy news summary.Dummy news summary.Dummy news summary."
const body =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export const DummyNews: News[] = [
  {
    id: "1",
    title: "This is dummy news 1",
    body,
    summary,
    createdAt: "2023-01-01",
  },
  {
    id: "2",
    title: "This is dummy news 2",
    body,
    summary,
    createdAt: "2023-02-01",
  },
  {
    id: "3",
    title: "This is dummy news 3",
    body,
    summary,
    createdAt: "2023-10-20",
  },
  {
    id: "4",
    title: "This is dummy news 4",
    body,
    summary,
    createdAt: "2023-10-30",
  },
  {
    id: "5",
    title: "This is dummy news 5",
    body,
    summary,
    createdAt: "2023-11-19",
  },
]
