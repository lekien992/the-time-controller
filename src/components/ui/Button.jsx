import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = '', ...props }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`custom-button ${className}`}
            onClick={onClick}
            style={{
                padding: '12px 28px',
                backgroundColor: 'var(--text-primary)',
                color: 'var(--bg-color)',
                borderRadius: '2px', // Sharper edges for premium feel
                fontWeight: 600,
                fontSize: '1rem',
                letterSpacing: '0.02em',
                border: '1px solid var(--text-primary)',
                cursor: 'pointer',
                ...props.style
            }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
