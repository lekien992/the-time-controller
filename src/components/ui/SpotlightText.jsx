import React, { useRef, useState, useEffect } from 'react';

const SpotlightText = ({ children, className = '', style = {} }) => {
    const containerRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPosition({ x, y });
    };

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        el.addEventListener('mousemove', handleMouseMove);
        return () => el.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <span
            ref={containerRef}
            className={className}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: 'relative',
                display: 'inline-block',
                color: '#333', // Default dim color
                backgroundImage: `radial-gradient(
          circle 150px at ${position.x}px ${position.y}px, 
          #ffffff 0%, 
          #333 100%
        )`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'default',
                transition: 'color 0.3s', // Smooth transition for fallback
                ...style
            }}
        >
            {children}
        </span>
    );
};

export default SpotlightText;
