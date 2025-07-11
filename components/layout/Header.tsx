"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface HeaderProps {
  currentPage?: string
}

const navigationLinks = [
  { href: "/batchtrak", label: "BatchTrak™" },
  { href: "/implementation", label: "Implementation" },
  { href: "/training", label: "Training" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
]

const resourcesLinks = [
  { href: "/blog/category/whitepapers", label: "White Papers" },
  { href: "/blog/category/lean-leadership-skills", label: "LEAN Leadership Skills" },
  { href: "/blog/category/lean-tools", label: "LEAN Tools" },
  { href: "/faqs", label: "FAQs" },
]

export default function Header({ currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div style={{ position: 'relative', width: '180px', height: '60px' }}>
            <Image src="/gmpkit-logo.svg" fill alt="GMPKit Logo" className="rounded object-contain" priority />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium hover:text-primary ${
                currentPage === link.label.toLowerCase().replace("™", "") ? "text-primary" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Resources Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary">
              Resources <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {resourcesLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="hidden md:flex gap-3">
          <Button variant="outline" size="sm" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium hover:text-primary ${
                  currentPage === link.label.toLowerCase().replace("™", "") ? "text-primary" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Resources Section in Mobile Menu */}
            <div className="pt-2 border-t">
              <h3 className="text-sm font-medium mb-2">Resources</h3>
              <div className="flex flex-col gap-2 pl-2">
                {resourcesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Button variant="outline" size="sm" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
