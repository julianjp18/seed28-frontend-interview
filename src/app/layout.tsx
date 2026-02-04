import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { ErrorBoundaryWrapper } from "./ErrorBoundaryWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bulltrack Pro",
  description: "Plataforma de ranking genético bovino - Resultados de clasificación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-[#111714]`}
      >
        <ErrorBoundaryWrapper>{children}</ErrorBoundaryWrapper>
      </body>
    </html>
  );
}
