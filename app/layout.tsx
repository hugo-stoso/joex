import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JOEX — Menos espera. Mais fluxo.",
  description: "Plataforma de produtividade empresarial para organizar solicitações, documentos e processos.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
