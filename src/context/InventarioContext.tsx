"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface InventarioItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface InventarioContextType {
  inventario: InventarioItem[];
  addItem: (item: Omit<InventarioItem, "id">) => void;
}

const InventarioContext = createContext<InventarioContextType | undefined>(
  undefined
);

const inventarioInicial: InventarioItem[] = [
  { id: 1, name: "Bola de futebol", quantity: 10, price: 100 },
  { id: 2, name: "Luva de goleiro", quantity: 20, price: 130 },
  { id: 3, name: "Camisa de basquete", quantity: 30, price: 300 },
  { id: 4, name: "Tênis de corrida", quantity: 5, price: 700 },
  { id: 5, name: "Camisa de futebol", quantity: 50, price: 250 },
];

export const InventarioProvider = ({ children }: { children: ReactNode }) => {
  const [inventario, setInventario] = useState<InventarioItem[]>(inventarioInicial);

  const addItem = (item: Omit<InventarioItem, "id">) => {
    const newItem = {
      ...item,
      id: inventario.length ? inventario[inventario.length - 1].id + 1 : 1,
    };
    setInventario([...inventario, newItem]);
  };

  return (
    <InventarioContext.Provider value={{ inventario, addItem }}>
      {children}
    </InventarioContext.Provider>
  );
};

export const useInventario = () => {
  const context = useContext(InventarioContext);
  if (!context) {
    throw new Error("useInventario deve ser usado somente dentro de um InventarioProvider");
  }
  return context;
};
