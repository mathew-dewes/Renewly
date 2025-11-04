
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma"
import { nextCookies } from "better-auth/next-js";
import prisma from "../db/prisma";
<<<<<<< HEAD
=======

>>>>>>> 3bcaab08b0bf42511091586085e0979c72928ecd

export const auth = betterAuth({
  database: prismaAdapter(prisma,
    { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,minPasswordLength:8,
  },
  
  plugins: [nextCookies()]
});