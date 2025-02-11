import { ShoppingBag } from "lucide-react";
import Cart from "./cart";

export function NavBar() {
  return (
    <header className="w-full overflow-hidden shadow-lg">
      <nav className="max-w-[1800px] mx-auto p-3 flex flex-row justify-between items-center">
        <ul className="flex flex-row gap-5 text-red-600">
          <li>Burguers</li>
          <li>Sobremesas</li>
          <li>Bebidas</li>
          <li>Acompanhamentos</li>
        </ul>

        <div className="flex flex-row gap-5">
          {" "}
          <button className="bg-red-600 text-white font-semibold py-3 px-5 rounded-lg">
            Entrar
          </button>
          <Cart>
            <button className="flex flex-row gap-3 items-center p-3 rounded-lg hover:bg-gray-100 ">
              <ShoppingBag size={30} />
              <div className="flex flex-col items-center">
                <span className="text-sm">0 items</span>
                <span className="text-[0.8rem]">R$ 0,00</span>
              </div>
            </button>
          </Cart>
        </div>
      </nav>
    </header>
  );
}
