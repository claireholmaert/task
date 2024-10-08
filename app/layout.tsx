// next
import type { Metadata } from "next";

// styles
import "./globals.css";

// chakra
import { ChakraProvider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Task",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
