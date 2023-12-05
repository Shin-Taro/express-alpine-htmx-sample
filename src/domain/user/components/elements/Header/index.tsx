import { LogOutButton } from "@domain/user/components/features/LogOutButton"
import React, { FC } from "react"

type Props = {
  isLoggedIn: boolean
}

export const Header: FC<Props> = ({ isLoggedIn }: Props) => (
  <header className="border-b-2 border-gray-900 flex justify-between items-center py-6 px-8">
    <h1 className="text-3xl">
      <a href="/">Astro app with Alpine.js and htmx</a>
    </h1>
    <nav className="text-2xl">
      <ul className="flex justify-between items-center gap-6">
        <li>
          <a href="/" className="hover:text-gray-500">
            Home
          </a>
        </li>
        {isLoggedIn && (
          <a href="/mypage" className="hover:text-gray-500">
            My Page
          </a>
        )}
        <li className="hover:text-gray-500">{isLoggedIn ? <LogOutButton /> : <a href="/login">Login</a>}</li>
      </ul>
    </nav>
  </header>
)
