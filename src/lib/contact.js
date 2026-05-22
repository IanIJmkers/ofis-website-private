import { supabase } from "./supabase";

const WEB3FORMS_KEY = "aae1d97e-f975-41ca-aebc-b0e189733d10";

export async function submitContactForm({
  name,
  organization,
  email,
  phone,
  requestType,
  message,
}) {
  const subjectPrefix =
    requestType === "second_opinion"
      ? "Second opinion verzoek (Private)"
      : "Nieuw contactformulier (Private)";

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: `${subjectPrefix}: ${name}`,
      from_name: "Orchestra Private Office Website",
      name,
      organization: organization || "",
      email,
      phone: phone || "",
      request_type: requestType || "regular",
      message,
    }),
  });

  if (!res.ok) {
    throw new Error("Email verzenden mislukt");
  }

  if (supabase) {
    supabase.from("contact_messages_private").insert({
      name,
      organization: organization || null,
      email,
      phone: phone || null,
      request_type: requestType || "regular",
      message,
    }).then(({ error }) => {
      if (error) console.error("Supabase backup failed:", error.message);
    });
  }
}
