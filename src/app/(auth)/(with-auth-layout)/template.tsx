"use client";
import Link from "next/link";
import "./styles.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navLink = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setinput] = useState("");
  return (
    <>
      <div>
        <input
          style={{
            border: "2px solid black",
          }}
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
      </div>
      {navLink.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </>
  );
}
