import { Inter } from "next/font/google";
import"./globals.css";
import Link from "next/link"
import ScrollAnimation from "./scrolleffect";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Keith Ng",
  description: "Who am I",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Keith Ng</title>
      </head>
      <body>
      <div className = "stickytop">
      <ScrollAnimation/>
      </div>
        <main>{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
