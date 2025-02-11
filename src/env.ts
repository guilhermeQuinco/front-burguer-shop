import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    API_GLOBAL_URL: z.string(),
  },

  client: {},
  runtimeEnv: {
    API_GLOBAL_URL: process.env.API_GLOBAL_URL,
  },
});
