"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between pr-4">
      {/* ESQUERDA */}
      <div className="flex items-center gap-6 border-b border-solid px-8 py-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={40}
            height={10}
            alt="Finance Controler"
          />
        </Link>
        {/* <h1 className="text-2xl font-bold">Finance Controler</h1> */}
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transaction"
          className={
            pathname === "/transaction"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Assinatura
        </Link>
      </div>
      {/* DIREITA */}
      <UserButton showName />
    </nav>
  );
};

export default Navbar;
