import { IItem } from "@/@types";
import { getAllItems } from "@/services/item";
import axios from "axios";
import { useEffect, useState } from "react";

export default async function Home() {
  const items: IItem[] = await getAllItems();

  return (
    <div className="min-h-screen flex items-center justify-center">
      {items.map((item) => (
        <span key={item.id}>{item.name}</span>
      ))}
    </div>
  );
}
