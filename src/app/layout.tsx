import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../style/style.css";
import "../style/responsive.css";
import "../style/academy.css";
import AOSProvider from "../helpers/AOSProvider";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png'
  },
  title: "Social Sculpt | Personal Branding and Growth Marketing Agency",
  description: "Social Sculpt specializes in personal branding and growth marketing, offering customized strategies, to elevate brand identity, engagement,",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${raleway.variable} antialiased`}>
       <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
