import { createBrowserClient } from "@supabase/ssr"

export async function createClient() {
  return createBrowserClient("", "")
}
