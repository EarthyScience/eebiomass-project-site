import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes'
import "./globals.css";

export const metadata: Metadata = {
  title: "eebiomass",
  description: "Project Office BIOMASS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="antialiased">
        <ThemeProvider defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
