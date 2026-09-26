import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WorkoutProvider from "@/context/WorkoutProvider";
import { ToastContainer } from "react-toastify";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog",
  description:
    "Track your workouts, explore exercises, and stay consistent with your fitness goals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${oswald.variable} h-full antialiased`}>
      <body className={`min-h-full flex flex-col ${inter.className}`}>
        <WorkoutProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
          <ToastContainer />
        </WorkoutProvider>
      </body>
    </html>
  );
}
