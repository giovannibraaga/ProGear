"use client";

import Link from "next/link";
import { useInventario } from "../../../context/InventarioContext";

export default function Page() {
  const { inventario } = useInventario();

  return (
    <div className="text-black text-center">
      <h1 className="flex justify-start text-3xl text-white font-bold mb-6">Inventário</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">ID</th>
            <th className="py-2 px-4 border-b border-gray-200">Nome</th>
            <th className="py-2 px-4 border-b border-gray-200">Quantidade</th>
            <th className="py-2 px-4 border-b border-gray-200">R$</th>
          </tr>
        </thead>
        <tbody>
          {inventario.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b border-gray-200">{item.id}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                {item.name}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {item.quantity}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/dashboard/inventario/adicionar">
        <button className="mt-6 px-4 py-2 bg-[#16535B] hover:bg-[#3a757c] text-white rounded inline-block">
          Adicionar Produto
        </button>
      </Link>
    </div>
  );
}
