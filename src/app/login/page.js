"use client"

import { useState } from "react"
import Image from "next/image"
import { signIn } from "next-auth/react"
import Google from "@/assets/google.png"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // important for error handling
    })

    if (result?.error) {
      alert(result.error)
    } else {
      window.location.href = "/"
    }
  }

  function handleGoogleLogin() {
    signIn("google", { callbackUrl: "/" })
  }

  return (
    <section className="mt-40">
      <h1 className="text-red-500 text-center text-4xl mb-10">
        Login
      </h1>

      <form
        onSubmit={handleSubmit}
        className="block max-w-100 mx-auto space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="cursor-pointer text-white bg-red-500 w-full py-2 rounded"
        >
          Login
        </button>

        {/* GOOGLE LOGIN BUTTON */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="cursor-pointer flex gap-2 justify-center w-full font-semibold border border-gray-300 rounded-xl px-6 py-2"
        >
          <Image
            src={Google}
            alt="Google Logo"
            width={40}
            height={40}
          />
          Login with Google
        </button>
      </form>
      <div className = "text-center text-zinc-600 mt-4">
        Don't have an account? <a href = {'/register'} className = "text-blue-600">Sign Up</a>
      </div>
    </section>
  )
}