"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2500&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-6 flex flex-col justify-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl"
                >
                    <span className="text-sm md:text-base font-medium tracking-widest uppercase mb-4 block text-neutral-200">
                        New Collection 2024
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Elevate Your <br /> Living Space.
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-200 mb-8 max-w-lg">
                        Discover our curated collection of premium furniture designed for modern life. Minimalist, functional, and timeless.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-neutral-100 transition-colors"
                    >
                        Shop Collection
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
