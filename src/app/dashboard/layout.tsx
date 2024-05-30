"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  ClipboardIcon,
  ArrowLeftEndOnRectangleIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-custom">
      <nav className="w-64 bg-[#16535b] p-4 flex flex-col justify-between">
        <div>
          <div className="border-b-2 border-b-[#0a2529] pb-4 mb-4">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Logo da empresa ProGear"
                width={50}
                height={50}
              />
              <h2 className="text-white text-xl font-bold ml-4">ProGear</h2>
            </div>
          </div>
          <ul>
            <li
              className={`mb-4 p-2 rounded flex items-center ${
                pathname === "/dashboard/inventario"
                  ? "bg-[#0a2529] text-white"
                  : "text-gray-400"
              }`}
            >
              <ClipboardIcon className="h-6 w-6 mr-2" />
              <Link href="/dashboard/inventario">Inventário</Link>
            </li>
            <li
              className={`mb-4 p-2 rounded flex items-center ${
                pathname === "/dashboard/relatorio"
                  ? "bg-[#0a2529] text-white"
                  : "text-gray-400"
              }`}
            >
              <PresentationChartLineIcon className="h-6 w-6 mr-2" />
              <Link href="/dashboard/relatorio">Relatório de vendas</Link>
            </li>
          </ul>
        </div>
        <div className="border-t-2 border-t-[#0a2529] pt-4 mt-4">
          <button className="flex items-center text-gray-400 hover:text-white">
            <ArrowLeftEndOnRectangleIcon className="h-6 w-6 mr-2" />
            <Link href="/">Sair</Link>
          </button>
        </div>
      </nav>
      <main className="flex-1 p-6 text-white">{children}</main>
    </div>
  );
}
