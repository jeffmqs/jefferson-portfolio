import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portfolio | Jefferson Marques",
  description:
    "Welcome to the portfolio of Jefferson Marques, showcasing projects and skills in web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8
      overflow-x-hidden dark:bg-dark-theme dark:text-white`}
      
      >
        {children}
      </body>
    </html>
  );
}
