import "@/styles/globals.css";
import { Geist, Geist_Mono, Raleway, Libre_Baskerville } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
});

export default function App() {
  return (
    <main className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${libreBaskerville.variable}`}>
    </main>
  );
}
