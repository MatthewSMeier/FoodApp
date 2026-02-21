"use client"

import { useEffect, useState } from "react"
import { signOut } from "next-auth/react"

export default function ProfilePage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch("/api/profile")
      const data = await res.json()
      setUser(data)
      setLoading(false)
    }

    fetchUser()
  }, [])

  async function handleSave(e) {
    e.preventDefault()

    await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })

    alert("Profile updated!")
  }

  if (loading) return <p className="text-center mt-10">Loading...</p>

  return (
    <section className="max-w-md mx-auto mt-40 space-y-6">
      <h1 className="text-3xl text-center text-red-500 font-bold">
        Your Profile
      </h1>

      <form onSubmit={handleSave} className="space-y-4">

        <input
          type="text"
          value={user.firstName || ""}
          onChange={(e) =>
            setUser({ ...user, firstName: e.target.value })
          }
          placeholder="First Name"
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          value={user.lastName || ""}
          onChange={(e) =>
            setUser({ ...user, lastName: e.target.value })
          }
          placeholder="Last Name"
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          value={user.email || ""}
          disabled
          className="w-full border p-2 rounded bg-gray-100"
        />

        <input
          type="text"
          value={user.address || ""}
          onChange={(e) =>
            setUser({ ...user, address: e.target.value })
          }
          placeholder="Address"
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="cursor-pointer text-white bg-red-500 w-full py-2 rounded"
        >
          Save Changes
        </button>

        <button
        type="submit"
        onClick={() => signOut({ callbackUrl: "/" })}
        className="cursor-pointer text-white bg-red-500 w-full py-2 rounded"
        >
        Logout
      </button>
      </form>
    </section>
  )
}