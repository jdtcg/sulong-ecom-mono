import Link from "next/link";
import Image from "next/image";
import Searchbar from "./Searchbar";
import { Bell, Home, ShoppingCart } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* Navbar Left */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="Sulong"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9 rounded-md"
        ></Image>
        <p className="hidden md:block text-md font-medium tracking-wider">
          SULONG
        </p>
      </Link>
      {/* Navbar Right */}
      <div className="flex items-center gap-6">
        <Searchbar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCartIcon />
        <Link href="/login">Sign in</Link>
      </div>
    </nav>
  );
}
