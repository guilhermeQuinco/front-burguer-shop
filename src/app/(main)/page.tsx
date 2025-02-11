import { IItem } from "@/@types";
import { getAllItems } from "@/services/item";
import { Hero } from "./_components/hero";
import BurguerSection from "./_components/sections/burguer";
import Box from "./_components/sections/box";

export default async function Home() {
  return (
    <>
      <Hero />
      <BurguerSection />
      <Box />
    </>
  );
}
