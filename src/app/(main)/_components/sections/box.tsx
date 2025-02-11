import { ICategoryItemResponse, IItem } from "@/@types";
import { Layout } from "@/components/_layout";
import { getCategoriesItems } from "@/services/item";
import Image from "next/image";
import React from "react";

const Box = async () => {
  const data: IItem[] = await getCategoriesItems("box");

  return (
    <section className="w-full overflow-hidden mt-8">
      <Layout>
        <h1 className="text-2xl font-bold mb-5">Combos</h1>
        <div className="grid grid-cols-2 gap-8">
          {data.map((item) => (
            <div
              className="flex flex-row gap-8 items-center border justify-between p-5 rounded-xl"
              key={item.id}
            >
              <div className="flex flex-col gap-3">
                <span className="text-xl"> {item.name}</span>
                <span className="text-gray-600">{item.description}</span>
              </div>
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={250}
                height={250}
              />
            </div>
          ))}
        </div>
      </Layout>
    </section>
  );
};

export default Box;
