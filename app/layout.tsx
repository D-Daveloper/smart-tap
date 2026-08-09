import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import { LoadingScreen } from "@/components/LoadingScreen";
import "./globals.css";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-heading-face",
  display: "swap",
});

const body = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body-face",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmartTap — turn every customer into a five-star Google review",
  description:
    "One small NFC card on your counter. Customers tap or scan, and your shop's page opens: review on Google, chat on WhatsApp, see prices, get directions.",
};

/**
 * Sets the theme before first paint so a dark-mode visitor never sees a
 * white flash. Kept inline and tiny on purpose.
 */
const themeScript = `
(function(){try{
  var s=localStorage.getItem('smarttap:theme');
  var d=s||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  document.documentElement.dataset.theme=d;
}catch(e){document.documentElement.dataset.theme='light'}})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
