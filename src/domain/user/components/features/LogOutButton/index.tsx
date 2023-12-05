import React from "react"

export const LogOutButton = () => (
  <div x-data="{open(){$refs.dialog.showModal()}, close(){$refs.dialog.close()}}">
    <dialog id="modal" x-ref="dialog" className="relative">
      <div className="fixed grid place-items-center inset-0 bg-black bg-opacity-70">
        <div className="flex flex-col justify-between bg-white w-[60%] h-[60%] py-16 px-20 rounded-xl">
          <div>
            <p className="mt-10">Do you want to log out?</p>
          </div>
          <div className="flex justify-around">
            <button type="button" x-on:click="close()" className="px-8 py-2 border-2 border-gray-500 rounded-2xl hover:opacity-70">
              Cancel
            </button>
            <button
              type="button"
              hx-post="/api/logout"
              hx-trigger="click"
              hx-target="#modal"
              hx-swap="outerHTML"
              className="px-8 py-2 border-2 border-red-500 rounded-2xl hover:opacity-70"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </dialog>
    <button x-on:click="open()">Logout</button>
  </div>
)
