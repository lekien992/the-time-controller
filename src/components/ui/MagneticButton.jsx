import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, style, ...props }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        // Calculate center
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calculate distance from center
        const x = (clientX - centerX) * 0.3; // Magnet strength
        const y = (clientY - centerY) * 0.3;

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const Component = props.href ? motion.a : motion.button;

    return (
        <Component
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            style={{
                padding: '20px 40px',
                fontSize: '1.2rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                background: '#fff',
                color: '#000',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                display: 'inline-block', // Ensure anchor behaves like block for padding
                textDecoration: 'none',
                ...style
            }}
            {...props}
        >
            {children}
        </Component>
    );
};

export default MagneticButton;
