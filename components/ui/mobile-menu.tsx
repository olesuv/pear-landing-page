"use client";

import { useState, useRef, useEffect, SetStateAction, Dispatch } from "react";
import Link from "next/link";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
interface NavLink {
  label: string;
  path: string;
}
import { UserResponse } from "@supabase/supabase-js";

export const USER_NOT_FOUND: string = "User not found";

type SupabaseUserType = UserResponse | typeof USER_NOT_FOUND;

export default function MobileMenu({
  handleSignOut,
  supabaseUser,
}: {
  handleSignOut: () => Promise<never>;
  supabaseUser: SupabaseUserType;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (isOpen && event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen]);

  const navLinks: NavLink[] = [
    { label: "About", path: "/about" },
    { label: "Discord", path: "https://discord.gg/AKy5FmqCkF" },
    { label: "GitHub", path: "https://github.com/trypear/pearai-app" },
    { label: "Priority Waitlist", path: "/priority-waitlist" },
  ];

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        className="flex items-center p-2 text-gray-700 hover:text-gray-600 focus:outline-none"
        aria-label="Toggle mobile menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative">
          <Menu
            className={`h-6 w-6 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}
          />
          <X
            className={`absolute left-0 top-0 h-6 w-6 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </button>

      <div
        ref={menuRef}
        className={`absolute left-0 top-full z-20 w-full border-y border-gray-200 bg-white-50 transition-all duration-300 ease-in-out ${isOpen ? "visible opacity-100" : "invisible opacity-0"} `}
      >
        <ul className="space-y-2 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.path}
                className="block py-2 text-gray-800 hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="space-y-2 px-4 pb-4 pt-2">
          {supabaseUser === USER_NOT_FOUND ? (
            <>
              <Button asChild className="w-full rounded-full">
                <Link onClick={() => setIsOpen(false)} href={"/signin"}>
                  Sign in
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link onClick={() => setIsOpen(false)} href={"/signup"}>
                  Sign up
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild className="w-full rounded-full">
                <Link onClick={() => setIsOpen(false)} href={"/settings"}>
                  Settings
                </Link>
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                asChild
                variant="outline"
                className="w-full"
              >
                <form action={handleSignOut}>
                  <button className="w-full">Sign out</button>
                </form>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
