import { ICategoryItemResponse } from "@/@types";
import { env } from "@/env";
import axios from "axios";

export async function getAllItems() {
  const response = await axios.get(`${env.API_GLOBAL_URL}/item`);

  return response.data;
}

export async function getCategoriesItems(slug: string) {
  const response = await axios.get<ICategoryItemResponse>(
    `${env.API_GLOBAL_URL}/category/${slug}`
  );

  return response.data.items;
}
