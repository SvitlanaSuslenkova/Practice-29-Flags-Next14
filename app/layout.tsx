import type { Metadata } from "next";
import { ThemeProvider } from "./Context/ThemeContext";
import { Open_Sans, Nunito_Sans } from "next/font/google";
import Header from "./components/Header/Header";
import "./reset.css";
import "./globals.css";
const openSans = Open_Sans({ subsets: ["latin"], weight: "500" });
const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries of the world",
  description: "Where in the world?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} ${nunitoSans.className}`}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
