export default function Footer() {
    return (
        <footer className="bg-white pt-20 pb-10 border-t">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">LUSSO.</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed">
                            Premium furniture designed for modern living. Quality, comfort, and style in every piece.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Shop</h4>
                        <ul className="space-y-4 text-sm text-neutral-500">
                            <li><a href="#" className="hover:text-black">All Products</a></li>
                            <li><a href="#" className="hover:text-black">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-black">Best Sellers</a></li>
                            <li><a href="#" className="hover:text-black">Sale</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-neutral-500">
                            <li><a href="#" className="hover:text-black">FAQ</a></li>
                            <li><a href="#" className="hover:text-black">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-black">Care Guide</a></li>
                            <li><a href="#" className="hover:text-black">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Follow Us</h4>
                        <ul className="space-y-4 text-sm text-neutral-500">
                            <li><a href="#" className="hover:text-black">Instagram</a></li>
                            <li><a href="#" className="hover:text-black">Pinterest</a></li>
                            <li><a href="#" className="hover:text-black">Facebook</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
                    <p>&copy; 2024 LUSSO Furniture. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-black">Privacy Policy</a>
                        <a href="#" className="hover:text-black">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
