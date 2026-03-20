import { supabase } from "./supabase";

const WEB3FORMS_KEY = "aae1d97e-f975-41ca-aebc-b0e189733d10";

export async function submitContactForm({ name, organization, email, phone, message }) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: `Nieuw contactformulier (Private): ${name}`,
      from_name: "Orchestra Private Office Website",
      name,
      organization: organization || "",
      email,
      phone: phone || "",
      message,
    }),
  });

  if (!res.ok) {
    throw new Error("Email verzenden mislukt");
  }

  // Also save to Supabase as backup (non-blocking)
  if (supabase) {
    supabase.from("contact_messages_private").insert({
      name,
      organization: organization || null,
      email,
      phone: phone || null,
      message,
    }).then(({ error }) => {
      if (error) console.error("Supabase backup failed:", error.message);
    });
  }
}
