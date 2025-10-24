
import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma"

import { nextCookies } from "better-auth/next-js";
const prisma = new PrismaClient()

export const auth = betterAuth({
  database: prismaAdapter(prisma,
    { provider: "sqlite" }),
  emailAndPassword: {
    enabled: true,minPasswordLength:8,
  },
  
  plugins: [nextCookies()]
});