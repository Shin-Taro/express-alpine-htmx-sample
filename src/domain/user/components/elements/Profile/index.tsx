import { User } from "@domain/user/model"
import React, { FC } from "react"

const trClass = "border-b-2 border-gray-400"
const cellClass = "py-8"

export const Profile: FC<User> = ({ name, id, address, email }) => (
  <div className="text-left text-lg">
    <table className="w-full">
      <tr className={trClass}>
        <th className={cellClass}>Your Name</th>
        <td>{name}</td>
      </tr>
      <tr className={trClass}>
        <th className={cellClass}>Your ID</th>
        <td>{id}</td>
      </tr>
      <tr className={trClass}>
        <th className={cellClass}>Your Address</th>
        <td>{address}</td>
      </tr>
      <tr>
        <th className={cellClass}>Your Email</th>
        <td>{email}</td>
      </tr>
    </table>
  </div>
)
