import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between">
              <Link href = {'/'} className= "text-red-500 items-center font-semibold text-3xl">Matt's Pizzeria</Link>
              <nav className = "flex items-center gap-8 font-semibold">
                <Link href ={'/'}>Home</Link>
                <Link href ={''}>Menu</Link>
                <Link href ={''}>Rewards</Link>
                <Link href ={'/register'} className = "bg-red-500 rounded-full text-white px-8 py-2">Login</Link>
              </nav>
            </header>
    ); 
}