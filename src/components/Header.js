"use client"

import Link from "next/link"
import Image from "next/image"
import { useSession } from "next-auth/react"

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="flex items-center justify-between">
      <Link
        href="/"
        className="text-red-500 items-center font-semibold text-3xl"
      >
        Matt's Pizzeria
      </Link>

      <nav className="flex items-center gap-8 font-semibold">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Rewards</Link>

        {/* If NOT logged in */}
        {!session && (
          <Link
            href="/login"
            className="bg-red-500 rounded-full text-white px-8 py-2"
          >
            Login
          </Link>
        )}

        {/* If logged in */}
        {session && (
          <Link href="/profile">
            {session.user.image ? (
              <Image
                src={session.user.image}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full border-2 border-red-500"
              />
            ) : (
              <div className="text-2xl w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full">
                {session.user.name?.[0]}
              </div>
            )}
          </Link>
        )}
      </nav>
    </header>
  )
}