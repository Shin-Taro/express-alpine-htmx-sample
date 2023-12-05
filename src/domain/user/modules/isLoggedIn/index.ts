import { sleep } from "@shared/modules/sleep"

export const isLoggedIn = async (cookies: Record<string, string>): Promise<boolean> => {
  await sleep(500) // Simulate a network request
  const { user } = cookies

  return Boolean(user)
}
