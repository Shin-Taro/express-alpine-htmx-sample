import React, { FC, PropsWithChildren } from "react"

export const Container: FC<PropsWithChildren> = ({ children }) => <main className="mx-auto mt-[60px] w-[80%] mb-[100px]">{children}</main>
