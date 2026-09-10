import type { Metadata } from "next";
import { Saira, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { company } from "@/lib/site";
import "./globals.css";

const saira = Saira({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-saira",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vexora.com.np"),
  title: {
    default: "Vexora: web applications, websites, mobile apps and games",
    template: "%s · Vexora",
  },
  description:
    "Vexora Developers & Consulting Pvt. Ltd. is a software studio in Chitwan, Nepal. We scope in writing, build in weekly slices you can click, and hand over everything.",
  openGraph: {
    title: "Vexora: software built to fit your business",
    description:
      "A software studio in Chitwan, Nepal building web applications, websites, mobile apps and games.",
    siteName: company.shortName,
    locale: "en_NP",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${saira.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
