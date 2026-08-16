import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Syllio — The Student & Teacher OS",
    template: "%s | Syllio",
  },
  description:
    "Syllio helps students scan syllabi with AI to auto-populate their calendar, and helps teachers build polished syllabi in minutes. One app. Zero spreadsheets.",
  metadataBase: new URL("https://www.syllioai.com"),
  openGraph: {
    type: "website",
    siteName: "Syllio",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
