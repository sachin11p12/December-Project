"use client";

import { Star } from "lucide-react";

const reviews = [
    {
        id: 1,
        name: "Sarah Jenkins",
        text: "Absolutely in love with my new sofa. The quality is outstanding and it looks exactly like the photos.",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael Chen",
        text: "Fast delivery and easy assembly. The minimalist design fits perfectly in my apartment.",
        rating: 5,
    },
    {
        id: 3,
        name: "Emma Wilson",
        text: "Great customer service. I had a question about the fabric and they were very helpful.",
        rating: 4,
    },
];

export default function Reviews() {
    return (
        <section className="py-20 bg-neutral-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm">
                            <div className="flex gap-1 text-yellow-500 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < review.rating ? "fill-current" : "text-neutral-300"}`}
                                    />
                                ))}
                            </div>
                            <p className="text-neutral-600 mb-6 leading-relaxed">"{review.text}"</p>
                            <p className="font-bold">{review.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
