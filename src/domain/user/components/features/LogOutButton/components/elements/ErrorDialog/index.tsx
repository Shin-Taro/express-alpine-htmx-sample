import React from "react"

export const ErrorDialog = () => (
  <dialog id="modal" x-data="{close(){$el.close()}}" x-effect="$el.showModal()" className="relative">
    <div className="fixed grid place-items-center inset-0 bg-black bg-opacity-70">
      <div className="flex flex-col justify-between bg-white w-[60%] h-[60%] py-16 px-20 rounded-xl">
        <div>
          <h2 className="text-3xl text-red-700">Error!!</h2>
          <p className="mt-10">Unknown error has occurred.</p>
        </div>
        <div className="text-center">
          <button type="button" x-on:click="close()" className="px-8 py-2 border-2 border-gray-500 rounded-2xl hover:opacity-70">
            Close
          </button>
        </div>
      </div>
    </div>
  </dialog>
)
