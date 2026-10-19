import { contact } from "./data.js";

const enc = encodeURIComponent;

// Tap-to-contact links. Phones open the right app automatically.
export const links = {
  email: `mailto:${contact.email}?subject=${enc("Hello from your portfolio")}`,
  whatsapp: `https://wa.me/${contact.whatsapp.replace("+", "")}?text=${enc(contact.whatsappMessage)}`,
  call: `tel:${contact.call}`,
};
