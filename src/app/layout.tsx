import type { Metadata } from "next";
import { Arvo, Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Playlistify",
  description: "Playlist generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
