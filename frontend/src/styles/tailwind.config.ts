module.exports = {
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 1s ease-in-out',
                'fade-in-up': 'fadeInUp 1s ease-in-out',
                'bounce': 'bounce 2s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
};