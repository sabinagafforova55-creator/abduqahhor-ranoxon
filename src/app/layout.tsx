import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Javohir & Muslimaxon - To'y taklifnomasi",
  description:
    "Siz hurmatli mehmonimiz sifatida Javohir va Muslimaxonning nikoh to'yiga taklif etilasiz.",
  openGraph: {
    title: "Javohir & Muslimaxon - To'y taklifnomasi",
    description:
      "2026-10-31 kuni, soat 16:00da Vodiy to'yxonasida kutib olamiz.",
    type: "website",
    siteName: "To'y taklifnomasi"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
