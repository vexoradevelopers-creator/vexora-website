import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_PUBLISHABLE_KEY;

/** Trim, collapse whitespace, and cap length so the DB constraints are never the first line of defence. */
function clean(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.replace(/\s+/g, " ").trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
}

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(request: Request) {
  if (!url || !key) {
    console.error("enquiry: SUPABASE_URL or SUPABASE_PUBLISHABLE_KEY is not set");
    return NextResponse.json(
      { error: "The form is not configured yet. Please email us instead." },
      { status: 500 },
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  // Honeypot: a real person never fills a field they cannot see.
  if (clean(payload.company_website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name, 200);
  const email = clean(payload.email, 320);
  const message = clean(payload.message, 5000);

  const missing: string[] = [];
  if (!name) missing.push("name");
  if (!email || !EMAIL.test(email)) missing.push("email");
  if (!message) missing.push("message");

  if (missing.length) {
    return NextResponse.json(
      { error: `Please check these fields: ${missing.join(", ")}.` },
      { status: 422 },
    );
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });

  const { error } = await supabase.from("enquiries").insert({
    name,
    email,
    message,
    business_name: clean(payload.business_name, 200),
    phone: clean(payload.phone, 40),
    project_type: clean(payload.project_type, 60),
    budget: clean(payload.budget, 120),
    source_page: clean(payload.source_page, 200),
  });

  if (error) {
    console.error("enquiry insert failed:", error.message);
    return NextResponse.json(
      { error: "We could not save that. Please email or call us instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
