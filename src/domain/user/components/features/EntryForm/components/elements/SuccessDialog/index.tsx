import React from "react"

export const SuccessDialog = () => (
  <dialog x-effect="$el.showModal()" id="modal" className="relative">
    <div className="fixed grid place-items-center inset-0 bg-black bg-opacity-70">
      <div className="flex flex-col justify-between bg-white w-[60%] h-[60%] py-16 px-20 rounded-xl">
        <div>
          <h2 className="text-3xl text-green-700">Success!!</h2>
          <p className="mt-10">User registration succeeded.</p>
        </div>
        <div className="mt-10 flex justify-between">
          <a href="/" className="border-b-2 border-gray-500 pb-2 hover:opacity-70">
            ← back to Home
          </a>
          <a href="/mypage" className="border-b-2 border-gray-500 pb-2 hover:opacity-70">
            go to My Page →
          </a>
        </div>
      </div>
    </div>
  </dialog>
)
