import axios from "axios";

export async function getAllItems() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_GLOBAL_URL}/item`
  );

  return response.data;
}
