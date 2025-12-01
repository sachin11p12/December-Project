"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Search, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const { user, logout } = useAuth();
    const { cartCount, setIsOpen: openCart } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    LUSSO.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {["Home", "Shop", "Categories", "About"].map((item) => (
                        <Link
                            key={item}
                            href={item === "Home" ? "/" : "#"}
                            className="text-sm font-medium hover:text-neutral-500 transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-6">
                    <button className="hover:text-neutral-500 transition-colors">
                        <Search className="w-5 h-5" />
                    </button>

                    {/* User Menu */}
                    <div className="relative">
                        {user ? (
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="flex items-center gap-2 hover:text-neutral-500 transition-colors"
                            >
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-8 h-8 rounded-full border border-neutral-200"
                                />
                            </button>
                        ) : (
                            <Link href="/login" className="hidden md:block hover:text-neutral-500 transition-colors">
                                <User className="w-5 h-5" />
                            </Link>
                        )}

                        <AnimatePresence>
                            {showUserMenu && user && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-neutral-100 py-2"
                                >
                                    <div className="px-4 py-2 border-b border-neutral-100">
                                        <p className="text-sm font-bold">{user.name}</p>
                                        <p className="text-xs text-neutral-500 truncate">{user.email}</p>
                                    </div>
                                    <Link
                                        href="/cart"
                                        className="block px-4 py-2 text-sm hover:bg-neutral-50"
                                        onClick={() => setShowUserMenu(false)}
                                    >
                                        My Cart
                                    </Link>
                                    <button
                                        onClick={() => {
                                            logout();
                                            setShowUserMenu(false);
                                        }}
                                        className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-neutral-50 flex items-center gap-2"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        Logout
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Cart Icon */}
                    <button
                        className="relative hover:text-neutral-500 transition-colors"
                        onClick={() => openCart(true)}
                    >
                        <ShoppingBag className="w-5 h-5" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden hover:text-neutral-500 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {["Home", "Shop", "Categories", "About"].map((item) => (
                                <Link
                                    key={item}
                                    href={item === "Home" ? "/" : "#"}
                                    className="text-lg font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                            {!user && (
                                <div className="pt-4 border-t flex flex-col gap-3">
                                    <Link
                                        href="/login"
                                        className="w-full bg-neutral-100 text-center py-3 rounded-full font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href="/signup"
                                        className="w-full bg-black text-white text-center py-3 rounded-full font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
