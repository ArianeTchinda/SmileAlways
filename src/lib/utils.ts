import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const WHATSAPP_LINK =
  "https://wa.me/237676615413?text=Bonjour%20Smile%20Always%2C%20je%20souhaite%20prendre%20un%20rendez-vous.";

export function formatCfaPrice(amount: number) {
  const eurAmount = amount / 655;
  return `À partir de ${amount.toLocaleString("fr-FR")} FCFA (~${eurAmount.toFixed(2).replace(".", ",")} €)`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
