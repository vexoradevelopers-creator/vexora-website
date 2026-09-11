import { createClient } from "@supabase/supabase-js";

/**
 * These two values are meant to be public. A Supabase publishable key is designed
 * to ship in client code; the security boundary is row-level security, not the key.
 *
 * On public.enquiries, `anon` is granted INSERT and nothing else — no SELECT, UPDATE
 * or DELETE policy exists — so a visitor can submit an enquiry but cannot read anyone
 * else's back. Reading them requires the service role, which never leaves Supabase.
 */
export const SUPABASE_URL = "https://uszvsdftbyzyuohpqrig.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_GBJV6DtxEuaJwtefsaL0lw_tlZJnx9v";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: false },
});

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function clean(value: FormDataEntryValue | null, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.replace(/\s+/g, " ").trim();
  return trimmed ? trimmed.slice(0, max) : null;
}

export type EnquiryResult = { ok: true } | { ok: false; error: string };

/** Validates, drops honeypot submissions, and writes one row to public.enquiries. */
export async function submitEnquiry(
  data: FormData,
  extra: { projectType: string; sourcePage: string },
): Promise<EnquiryResult> {
  // A real person never fills a field they cannot see.
  if (clean(data.get("company_website"), 200)) return { ok: true };

  const name = clean(data.get("name"), 200);
  const email = clean(data.get("email"), 320);
  const message = clean(data.get("message"), 5000);

  const missing: string[] = [];
  if (!name) missing.push("name");
  if (!email || !EMAIL.test(email)) missing.push("email");
  if (!message) missing.push("message");
  if (missing.length) {
    return { ok: false, error: `Please check these fields: ${missing.join(", ")}.` };
  }

  const { error } = await supabase.from("enquiries").insert({
    name,
    email,
    message,
    business_name: clean(data.get("business_name"), 200),
    phone: clean(data.get("phone"), 40),
    project_type: extra.projectType.slice(0, 60),
    budget: clean(data.get("budget"), 120),
    source_page: extra.sourcePage.slice(0, 200),
  });

  if (error) {
    // P0001 is our own rate-limit trigger; its message is written for people.
    if (error.code === "P0001") return { ok: false, error: error.message };
    console.error("enquiry insert failed:", error.code);
    return { ok: false, error: "We could not save that. Please email or call us instead." };
  }
  return { ok: true };
}
