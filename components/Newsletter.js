"use client";

export default function Newsletter() {
    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Family</h2>
                <p className="text-neutral-400 mb-8 max-w-md mx-auto">
                    Subscribe to our newsletter for exclusive offers, design tips, and new arrivals.
                </p>
                <form className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white flex-1"
                    />
                    <button className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-colors">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}
