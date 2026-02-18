// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth"
import { authOptions } from "@/auth"

export const GET = (req, res) => NextAuth(authOptions)(req, res)
export const POST = (req, res) => NextAuth(authOptions)(req, res)
