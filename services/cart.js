export const cartService = {
    calculateTotal: (items) => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    formatPrice: (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    }
};
