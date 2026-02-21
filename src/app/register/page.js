"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Account created!");
    } else {
      alert(data.error);
    }
  }

  return (
    <section className="mt-40">
        <h1 className="text-red-500 text-center text-4xl mb-10">
        Sign Up
        </h1>
    <form onSubmit={handleSubmit} className="block max-w-100 mx-auto space-y-4">
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          className="block w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          className="block w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Address"
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="block w-full border p-2 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="block w-full border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="block w-full border p-2 rounded"
        />
      <button
        type="submit"
        className="cursor-pointer text-white bg-red-500 w-full py-2 rounded"
        >
        Register
      </button>
    </form>
    </section>
  );
}