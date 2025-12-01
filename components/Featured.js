"use client";

import { motion } from "framer-motion";
import { products } from "../data/products";
import { ShoppingBag, Star, Eye } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Featured() {
    const { addToCart } = useCart();
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-sm font-medium tracking-widest uppercase text-neutral-500 mb-2 block">
                        Selected for you
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold">Featured Collection</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.slice(0, 4).map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                            onMouseEnter={() => setHoveredId(product.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="relative h-[400px] bg-neutral-100 rounded-2xl overflow-hidden mb-4">
                                {product.tag && (
                                    <span className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                                        {product.tag}
                                    </span>
                                )}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Action Buttons */}
                                <div className="absolute bottom-4 left-0 w-full px-4 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="flex-1 bg-white text-black py-3 rounded-full font-medium shadow-lg flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors"
                                    >
                                        <ShoppingBag className="w-4 h-4" />
                                        Add to Cart
                                    </button>
                                    <button className="w-12 h-12 bg-white text-black rounded-full shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                        <Eye className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                                    <p className="text-neutral-500 text-sm">{product.category}</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-lg font-bold block">₹{product.price}</span>
                                    <div className="flex items-center gap-1 text-yellow-500 text-xs">
                                        <Star className="w-3 h-3 fill-current" />
                                        <span>{product.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="border border-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
}
