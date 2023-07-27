import "./globals.css";
import { League_Spartan } from "next/font/google";

import Providers from "@/app/components/Providers";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of BAK",
  description: "My portfolio implemented using Next.js and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`container mx-auto bg-white dark:bg-blue-950 text-blue-950 dark:text-sky-400 ${leagueSpartan.className}`}
      >
        <Providers>{children}</Providers>
        {/* {children} */}
      </body>
    </html>
  );
}
