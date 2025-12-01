const STORAGE_KEY = 'furniture_ecommerce_token';
const USER_KEY = 'furniture_ecommerce_user';

export const authService = {
    login: async (email, password) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock validation
        if (email && password) {
            const token = 'mock_jwt_token_' + Math.random().toString(36).substr(2);
            const user = {
                id: 1,
                name: 'Demo User',
                email: email,
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            };

            localStorage.setItem(STORAGE_KEY, token);
            localStorage.setItem(USER_KEY, JSON.stringify(user));

            return { user, token };
        }
        throw new Error('Invalid credentials');
    },

    register: async (name, email, password) => {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const token = 'mock_jwt_token_' + Math.random().toString(36).substr(2);
        const user = {
            id: Math.floor(Math.random() * 1000),
            name,
            email,
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        };

        localStorage.setItem(STORAGE_KEY, token);
        localStorage.setItem(USER_KEY, JSON.stringify(user));

        return { user, token };
    },

    logout: () => {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(USER_KEY);
    },

    getUser: () => {
        if (typeof window === 'undefined') return null;
        const userStr = localStorage.getItem(USER_KEY);
        return userStr ? JSON.parse(userStr) : null;
    },

    getToken: () => {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem(STORAGE_KEY);
    },

    isAuthenticated: () => {
        if (typeof window === 'undefined') return false;
        return !!localStorage.getItem(STORAGE_KEY);
    }
};
