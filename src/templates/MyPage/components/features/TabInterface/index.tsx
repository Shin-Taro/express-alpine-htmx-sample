import { Profile } from "@domain/user/components/elements/Profile"
import { Analytics } from "@domain/user/components/elements/Analytics"
import { Billing } from "@domain/user/components/elements/Billing"
import { Settings } from "@domain/user/components/elements/Settings"
import React, { FC } from "react"
import { User } from "@domain/user/model"

const menu = [
  {
    title: "Profile",
    contents: Profile,
  },
  {
    title: "Analytics",
    contents: Analytics,
  },
  {
    title: "Billing",
    contents: Billing,
  },
  {
    title: "Settings",
    contents: Settings,
  },
]

type Props = User

export const TabInterface: FC<Props> = (props) => (
  <div x-data="{active:0}" className="w-full">
    <ul className="flex gap-1 text-xl">
      {menu.map((item, index) => {
        const bindClass = `active === ${index} && 'opacity-70'`
        const bindDisabled = `active === ${index}`
        const setActive = `active = ${index}`
        return (
          <li key={item.title}>
            <button
              type="button"
              x-bind:disabled={bindDisabled}
              x-on:click={setActive}
              className="min-w-[135px] py-2 px-6 text-center border-t-2 border-x-2 border-gray-500 rounded-t-lg"
              x-bind:class={bindClass}
            >
              {item.title}
            </button>
          </li>
        )
      })}
    </ul>
    <div className="border-2 border-gray-500 py-16 px-28">
      {menu.map((item, index) => {
        const isActive = `active === ${index}`
        return (
          <template key={item.title} x-if={isActive}>
            <section>
              <h3 className="text-2xl">{item.title}</h3>
              <div className="mt-10">
                <item.contents {...props} />
              </div>
            </section>
          </template>
        )
      })}
    </div>
  </div>
)
