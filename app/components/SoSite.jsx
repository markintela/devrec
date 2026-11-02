"use client";
import { usePathname } from "next/navigation";

// Esconde cabeçalho e rodapé do site dentro do backoffice.
export default function SoSite({ children }) {
  return usePathname().startsWith("/admin") ? null : children;
}
