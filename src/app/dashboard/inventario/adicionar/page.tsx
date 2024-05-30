"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useInventario } from "../../../../context/InventarioContext";

export default function Page() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number | "">("");
  const [price, setPrice] = useState<number | "">("");
  const { addItem } = useInventario();
  const router = useRouter();

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    addItem({ name, quantity: Number(quantity), price: Number(price) });
    router.push("/dashboard/inventario");
  };

  return (
    <div className="text-white font-bold text-center">
      <h1 className="text-3xl font-bold mb-6">Adicionar Produto</h1>
      <form onSubmit={handleAddItem} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-bold mb-2">
            Nome
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-white font-bold mb-2">
            Quantidade
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) =>
              setQuantity(e.target.value ? parseInt(e.target.value) : "")
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-white font-bold mb-2">
            Preço
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value ? parseFloat(e.target.value) : "")
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-6 px-4 py-2 bg-[#16535B] hover:bg-[#3a757c] text-white rounded"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
