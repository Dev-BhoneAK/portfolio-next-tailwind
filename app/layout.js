import "./globals.css";
import { League_Spartan } from "next/font/google";

import Providers from "@/app/components/Providers";
const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Hello",
  description: "My portfolio implemented using Next.js and Tailwind",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`container mx-auto bg-white dark:bg-[#0a1a2f] text-[#0a1a2f] dark:text-sky-400 ${leagueSpartan.className}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
