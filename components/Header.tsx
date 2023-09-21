"use client";

import { MoonIcon } from "@radix-ui/react-icons";
import { Menu, ShoppingCart, Sun } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Container from "./ui/container";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
// nav links

const routes = [
  {
    href: "/",
    label: "About Us",
  },
  {
    href: "/",
    label: "Codehack",
  },
  {
    href: "/sale",
    label: "Programs",
  },
  {
    href: "/",
    label: "Way to give",
  },
  {
    href: "/",
    label: "Connect",
  },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link
                      key={i}
                      href={route.href}
                      className="block px-2 py-1 text-lg font-semibold uppercase"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="ml-4 lg:ml-0">
              <Image src="/img/ptg-lg.png" alt="logo" height={80} width={80} />
            </Link>
          </div>
          <nav className="mx-6  items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route, i) => (
              <Button asChild variant="ghost">
                <Link
                  key={i}
                  href={route.href}
                  className="text-sm font-medium transition-colors md:font-semibold"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun />
              <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <Button
              variant="default"
              size="lg"
              className="mr-2"
              aria-label="shopping cart"
            >
              Donnate
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
