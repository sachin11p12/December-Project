"use client";

import { motion } from "framer-motion";
import { categories } from "../data/products";

export default function Categories() {
    return (
        <section className="py-20 bg-neutral-50">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Shop by Category</h2>
                    <a href="#" className="text-sm font-medium underline hover:text-neutral-600">
                        View All
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="relative h-80 overflow-hidden rounded-2xl mb-4">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <h3 className="text-white text-2xl font-bold">{cat.name}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
