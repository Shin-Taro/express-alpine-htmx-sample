import React, { FC } from "react"

type Props = {
  direction: "left" | "right"
}

export const Arrow: FC<Props> = ({ direction }) => (
  <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[50%] border-gray-300 border-2 hover:opacity-70">
    <svg fill="#aaaaaa" height={22} viewBox="0 0 12 22" width={12} xmlns="http://www.w3.org/2000/svg">
      {direction === "left" ? (
        <path
          clip-rule="evenodd"
          d="M11.653 21.647c-.463.47-1.214.47-1.677 0L.346 11.85a1.218 1.218 0 0 1 0-1.702L9.977.353a1.172 1.172 0 0 1 1.677 0c.463.47.463 1.232 0 1.702L2.86 11l8.793 8.945c.463.47.463 1.232 0 1.702Z"
          fill-rule="evenodd"
        />
      ) : (
        <path
          clip-rule="evenodd"
          d="M.347.353a1.172 1.172 0 0 1 1.677 0l9.63 9.796c.462.47.462 1.232 0 1.702l-9.63 9.796c-.463.47-1.214.47-1.677 0a1.218 1.218 0 0 1 0-1.702L9.14 11 .347 2.055a1.218 1.218 0 0 1 0-1.702Z"
          fill-rule="evenodd"
        />
      )}
    </svg>
  </div>
)
