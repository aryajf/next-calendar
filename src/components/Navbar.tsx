"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(){
  const pathname = usePathname()

  return (
    <div className="h-12 px-4 bg-red-600 text-white flex item items-center justify-between">
      <h1>Navbar</h1>
      <div className="flex gap-4">
        <Link className={`${pathname === '/' ? 'text-slate-900' : 'text-white'}`} href="/">Home</Link>
        <Link className={`${pathname === '/products' ? 'text-slate-900' : 'text-white'}`} href="/products">Products</Link>
      </div>
    </div>
  )
}