import React from 'react'
import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
    return (

        <header className="bg-blue-600 text-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo Section */}
                <div className="text-2xl font-bold">
                    <Link href="/">MyShop</Link>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-gray-300">
                        Home
                    </Link>
                    <Link href="/pages/products" className="hover:text-gray-300">
                        Products
                    </Link>
                    <Link href="/pages/about" className="hover:text-gray-300">
                        About Us
                    </Link>
                    <Link href="/pages/contact" className="hover:text-gray-300">
                        Contact
                    </Link>
                </nav>

                {/* CTA Button */}
                <div>
                    <Link
                        href="/cart"
                        className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200"
                    >
                        Cart
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">

                    <DropdownMenu>
                        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link href="/">Home</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/pages/about">About</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/pages/products">Products</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/pages/contact">Contact</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>


                </div>
            </div>
        </header>


    )
}

export default Header
