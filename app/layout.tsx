import type { Metadata } from "next";
import { ThemeProvider } from "./Context/ThemeContext";
import { Nunito_Sans, Roboto } from "next/font/google";
import Header from "./components/Header/Header";
import "./reset.css";
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: "600" });
const roboto = Roboto({ subsets: ["latin"], weight: "500" });

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
      <body className={`${nunitoSans.className}, ${roboto.className}`}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
