import React from "react"

export const EntryForm = () => (
  <>
    <form className="max-w-[900px] m-auto border-2 border-gray-500 rounded px-20 py-10 text-xl">
      <div className="mt-6">
        <label className="align-middle">
          <span className="inline-block w-24">name</span>:{" "}
          <input type="text" name="name" placeholder="Shin-Taro" className="border-2 border-gray-500 rounded w-80" />
        </label>
      </div>
      <div className="mt-6">
        <label className="align-middle">
          <span className="inline-block w-24">address</span>:{" "}
          <input type="text" name="address" placeholder="Tokyo, Japan" className="border-2 border-gray-500 rounded w-80" />
        </label>
      </div>
      <div className="mt-6">
        <label className="align-middle">
          <span className="inline-block w-24">email</span>:{" "}
          <input type="text" name="email" placeholder="email@example.com" className="border-2 border-gray-500 rounded w-80" />
        </label>
      </div>
      <div className="mt-6">
        <label className="align-middle">
          <span className="inline-block w-24">password</span>: <input type="password" name="password" className="border-2 border-gray-500 rounded" />
        </label>
      </div>
      <div className="text-center mt-14">
        <button
          hx-post="/api/register"
          hx-trigger="click"
          hx-target="#modal"
          hx-swap="outerHTML"
          className="px-8 py-2 bg-orange-400 rounded-2xl hover:opacity-70"
        >
          Submit
        </button>
      </div>
    </form>
    <div id="modal" />
  </>
)
