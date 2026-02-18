"use client"

import Image from "next/image";
import Google from "@/assets/google.png";
import { signIn } from "next-auth/react";

export default function RegisterPage() {

    function handleGoogleLogin() {
        signIn("google", { callbackUrl: "/" }); 
    }

    return (
        <section className="mt-8">
            <h1 className="text-red-500 text-center text-4xl mb-10">
                Login
            </h1>

            <form className="block max-w-100 mx-auto">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <button type="submit" className="cursor-pointer text-white">
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
                        alt={"Google Logo"}
                        width={40}
                        height={40}
                    />
                    Login with Google
                </button>
            </form>
        </section>
    );
}
