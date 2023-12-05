import React from "react"

export const SuccessDialog = () => (
  <dialog x-effect="$el.showModal()" id="modal" className="relative">
    <div className="fixed grid place-items-center inset-0 bg-black bg-opacity-70">
      <div className="flex flex-col justify-between bg-white w-[60%] h-[60%] py-16 px-20 rounded-xl">
        <div>
          <h2 className="text-3xl text-green-700">Success!!</h2>
          <p className="mt-10">Logged out successfully.</p>
        </div>
        <div className="text-center mt-10">
          <a href="/" className="px-8 py-2 border-2 border-gray-500 rounded-2xl hover:opacity-70">
            Close
          </a>
        </div>
      </div>
    </div>
  </dialog>
)
