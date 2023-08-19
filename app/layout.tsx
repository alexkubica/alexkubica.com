import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PageNavbar } from "../components/PageNavbar";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Kubica",
  description: "TODO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <Providers>
          <PageNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
