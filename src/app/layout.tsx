import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/shared/CustomCursor";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const clash = Space_Grotesk({ subsets: ["latin"], variable: "--font-clash" });

export const metadata: Metadata = {
  title: "Qurat-ul-Ain Fatima | Flutter & Full-Stack Developer",
  description: "Portfolio of Qurat-ul-Ain Fatima, a Flutter and Full-Stack Developer specializing in AI and modern web apps.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${clash.variable} bg-background text-white antialiased`}>
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="relative z-10 pt-16">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
