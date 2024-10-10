import { ReactNode } from "react";
import type { Metadata } from "next";

import "./styles/globals.css";

export const metadata: Metadata = {
  title: "PrismaTech Code Academy",
  description: "Venha estudar conosco!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Bootstrap Icons */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
