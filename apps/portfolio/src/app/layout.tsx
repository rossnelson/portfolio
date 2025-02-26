import type { Metadata } from "next";
import "./markdown.scss";
import "./globals.scss";
import "./animations.scss";
import { Header } from "~/components/header";

export const metadata: Metadata = {
  title: "Ross Nelson - Software Engineer",
  description: `
    Ross Nelson is a software engineer based in the US. He specializes in 
    building full-stack applications with React, TypeScript, Node.js, Golang, 
    and more.
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="tokyonight-storm">
      <body className={`antialiased`}>
        <Header />

        {children}
      </body>
    </html>
  );
}
