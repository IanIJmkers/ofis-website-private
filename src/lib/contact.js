import { supabase } from "./supabase";

export async function submitContactForm({ name, organization, email, phone, message }) {
  if (!supabase) {
    throw new Error("Supabase is not configured");
  }

  const { error } = await supabase.from("contact_messages_private").insert({
    name,
    organization: organization || null,
    email,
    phone: phone || null,
    message,
  });

  if (error) {
    console.error("Error submitting contact form:", error.message);
    throw error;
  }
}
