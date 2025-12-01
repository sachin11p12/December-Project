"use client";

import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login?redirect=/cart');
        }
    }, [user, loading, router]);

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (!user) return null; // Will redirect

    return (
        <div className="min-h-screen bg-neutral-50 pt-32 pb-20">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

                {cart.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
                        <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-neutral-800 transition-colors"
                        >
                            Continue Shopping <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            {cart.map((item) => (
                                <motion.div
                                    layout
                                    key={item.id}
                                    className="bg-white p-6 rounded-2xl shadow-sm flex gap-6 items-center"
                                >
                                    <div className="w-24 h-24 bg-neutral-100 rounded-xl overflow-hidden flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                                        <p className="text-neutral-500 text-sm mb-2">{item.category}</p>
                                        <p className="font-bold">₹{item.price}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-3 bg-neutral-100 rounded-full px-4 py-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="hover:text-neutral-600"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="font-medium w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="hover:text-neutral-600"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-neutral-400 hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-8 rounded-2xl shadow-sm sticky top-32">
                                <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-neutral-500">
                                        <span>Subtotal</span>
                                        <span>₹{cartTotal}</span>
                                    </div>
                                    <div className="flex justify-between text-neutral-500">
                                        <span>Shipping</span>
                                        <span>Free</span>
                                    </div>
                                    <div className="border-t pt-4 flex justify-between font-bold text-lg">
                                        <span>Total</span>
                                        <span>₹{cartTotal}</span>
                                    </div>
                                </div>
                                <button className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-neutral-800 transition-colors">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
