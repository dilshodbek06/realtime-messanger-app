import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToastProvider } from "@/providers/toast-provider";
import AuthContext from "@/context/auth-context";
import ActiveStatus from "./_components/active-status";
import { ThemeProvider } from "./_components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Messanger clone",
  description: "Messanger clone by ZD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthContext>
          <ToastProvider />
          <ActiveStatus />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </AuthContext>
      </body>
    </html>
  );
}
