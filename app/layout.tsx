import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-hero-gradient bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* Background image */}
        <Image
          src="/decoration-right.png"
          alt="Stars background"
          className="absolute top-0 right-0 w-auto h-[70%] pointer-events-none select-none"
          width={300}
          height={300}
        />
        {/* Logo image */}
        <Image
          src="/logo-ms.png"
          alt="Stars background"
          className="absolute top-5 left-5 w-[85px] h-auto pointer-events-none select-none"
          width={300}
          height={300}
        />

        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="h-screen w-full flex justify-center items-center">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
