import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Mainlayout from "@/components/templates/MainLayout";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raven Web",
  description: "Raveb Traven Agen by Rapli",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Saepul Malik" },
    {
      name: "Saepul Malik",
      url: "https://www.linkedin.com/in/saepulmalik27/",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body   className={cn(inter.className, 'relative')}>
        <Mainlayout>{children}</Mainlayout>
      </body>
    </html>
  );
}
