import "./globals.css";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Company Dashboard",
  description: "Company Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />

        <div className="app-layout">
          <Sidebar />

          <main className="main-content">
            {children}
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}