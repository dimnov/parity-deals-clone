import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  emptyStringAsUndefined: true,
  server: {
    DATABASE_URL: z.string().url(),
    CLERK_SECRET_KEY: z.string(),
    CLERK_WEBHOOK_SECRET: z.string(),
    STRIPE_SECRET_KEY: z.string(),
    STRIPE_WEBHOOK_SECRET: z.string(),
    STRIPE_BASIC_PLAN_PRICE_ID: z.string(),
    STRIPE_STANDARD_PLAN_PRICE_ID: z.string(),
    STRIPE_PREMIUM_PLAN_PRICE_ID: z.string(),
    TEST_COUNTRY_CODE: z.string(),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    CLERK_WEBHOOK_SECRET: process.env.CLERK_WEBHOOK_SECRET,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    STRIPE_BASIC_PLAN_PRICE_ID: process.env.STRIPE_BASIC_PLAN_PRICE_ID,
    STRIPE_STANDARD_PLAN_PRICE_ID: process.env.STRIPE_STANDARD_PLAN_PRICE_ID,
    STRIPE_PREMIUM_PLAN_PRICE_ID: process.env.STRIPE_PREMIUM_PLAN_PRICE_ID,
    TEST_COUNTRY_CODE: process.env.TEST_COUNTRY_CODE,
  },
});
