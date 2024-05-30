"use client";

import { useState } from "react";

interface RelatorioItem {
  id: number;
  productName: string;
  quantity: number;
  revenue: number;
}

const RelatorioInicial: RelatorioItem[] = [
  { id: 1, productName: "Bola de futebol", quantity: 5, revenue: 500 },
  { id: 2, productName: "Luva de goleiro", quantity: 7, revenue: 910 },
  { id: 3, productName: "Camisa de basquete", quantity: 3, revenue: 900 },
  { id: 4, productName: "Tênis de corrida", quantity: 2, revenue: 1400 },
];

export default function Page() {
  const [Relatorio, setRelatorio] = useState<RelatorioItem[]>(RelatorioInicial);

  return (
    <div className="text-black text-center">
      <h1 className="text-3xl flex text-white font-bold mb-6">Relatório de Vendas</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">ID</th>
            <th className="py-2 px-4 border-b border-gray-200">Nome do Produto</th>
            <th className="py-2 px-4 border-b border-gray-200">Quantidade Vendida</th>
            <th className="py-2 px-4 border-b border-gray-200">Receita Total</th>
          </tr>
        </thead>
        <tbody>
          {Relatorio.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b border-gray-200">{item.id}</td>
              <td className="py-2 px-4 border-b border-gray-200">{item.productName}</td>
              <td className="py-2 px-4 border-b border-gray-200">{item.quantity}</td>
              <td className="py-2 px-4 border-b border-gray-200">{item.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
