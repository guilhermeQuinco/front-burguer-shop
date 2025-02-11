import { IItem } from "@/@types";
import { Layout } from "@/components/_layout";
import Slide from "@/components/slide";
import { getAllItems, getCategoriesItems } from "@/services/item";
import React from "react";

const BurguerSection = async () => {
  const data: IItem[] = await getCategoriesItems("burguers");
  console.log(data);

  return (
    <section>
      <Layout>
        <h1 className="text-2xl font-bold mb-5">Burguers</h1>
        <Slide items={data} />
      </Layout>
    </section>
  );
};

export default BurguerSection;
