"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext({});

export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('furniture_wishlist');
        if (saved) {
            setWishlist(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('furniture_wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const toggleWishlist = (product) => {
        setWishlist(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) {
                return prev.filter(item => item.id !== product.id);
            }
            return [...prev, product];
        });
    };

    const isInWishlist = (productId) => {
        return wishlist.some(item => item.id === productId);
    };

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
}

export const useWishlist = () => useContext(WishlistContext);
