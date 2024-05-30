import "./styles/globals.css";
import { Inter } from "next/font/google";
import { InventarioProvider } from "@/context/InventarioContext";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard ProGear",
  description: "Atividade FIAP curso Sistemas de informação modalidade online.",
  icons: {
    icon: [
      {
        url: "/images/ProGearLogo.png",
        href: "/images/ProGearLogo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <InventarioProvider>{children}</InventarioProvider>
      </body>
    </html>
  );
}
