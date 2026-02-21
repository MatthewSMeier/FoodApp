// src/auth.js

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { connectDB } from "@/lib/db"
import User from "@/models/User"

export const authOptions = {
  providers: [
    // 🔵 Google Login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // 🟢 Email + Password Login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        await connectDB()

        const user = await User.findOne({
          email: credentials.email,
        })

        if (!user) {
          throw new Error("No user found")
        }

        if (!user.password) {
          throw new Error("Please sign in with Google")
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isPasswordValid) {
          throw new Error("Invalid password")
        }

        return {
          id: user._id.toString(),
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
        }
      },
    }),
  ],

  callbacks: {
    // 🔥 Save Google users to DB
    async signIn({ user, account }) {
      if (account.provider === "google") {
        await connectDB()

        const existingUser = await User.findOne({
          email: user.email,
        })

        if (!existingUser) {
          const names = user.name?.split(" ") || []

          await User.create({
            firstName: names[0] || "",
            lastName: names.slice(1).join(" ") || "",
            email: user.email,
            image: user.image,
            provider: "google",
          })
        }
      }

      return true
    },

    // 🔥 Attach MongoDB id to JWT
    async jwt({ token }) {
      await connectDB()

      const dbUser = await User.findOne({ email: token.email })

      if (dbUser) {
        token.id = dbUser._id.toString()
      }

      return token
    },

    // 🔥 Make id available in session
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
      }
      return session
    },
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)