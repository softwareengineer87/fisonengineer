import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fison Engineer | Desenvolvimento de sites e sistemas em ceara mirim e natal",
  description: "Desenvolvimento de sites em ceara mirim e natal, desenvolvimento de landing page em ceara mirim e natal, desenvolvimento de sistemas em ceara mirim e natal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
