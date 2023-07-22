import "./globals.css";
import { League_Spartan } from "next/font/google";

import Providers from "@/components/Providers";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of BAK",
  description: "My portfolio implemented using Next.js and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
