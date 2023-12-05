import React, { FC, PropsWithChildren } from "react"

type Props = {
  title: string
}

export const Document: FC<PropsWithChildren<Props>> = ({ title, children }) => (
  <html lang="en">
    <head>
      <meta charSet="utf8" />
      <meta name="description" content="application with alpine.js and htmx" />
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <title>{title}</title>
      <script src="https://cdn.tailwindcss.com" />
      <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.3/dist/cdn.min.js" />
      <script
        defer
        src="https://unpkg.com/htmx.org@1.9.9"
        integrity="sha384-QFjmbokDn2DjBjq+fM+8LUIVrAgqcNW2s0PjAxHETgRn9l4fvX31ZxDxvwQnyMOX"
        crossOrigin="anonymous"
      />
    </head>
    <body>{children}</body>
  </html>
)
