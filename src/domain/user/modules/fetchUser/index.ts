import type { User } from "@domain/user/model"

import { sleep } from "@shared/modules/sleep"
import { DummyUser } from "@domain/user/const/DummyUser"

export const fetchUser = async (): Promise<User> => {
  await sleep(1000)
  return DummyUser
}
