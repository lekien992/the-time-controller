import React, { useRef } from 'react';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from 'framer-motion';

const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const KineticText = ({ children, baseVelocity = 5 }) => { // Slowed down base velocity for less chaos
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    // Softer spring for smoother reaction
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50, // Higher damping to stop faster
        stiffness: 200 // Softer spring
    });

    // Reduce multiplier from 5 to 2 to prevent "flying off"
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
        clamp: false
    });

    // Reduce skew intensity even more
    const skewX = useTransform(smoothVelocity, [-1000, 1000], [-10, 10], {
        clamp: true
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        // Add velocity driven movement
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex' }}>
            <motion.div style={{ x, display: 'flex', gap: '30px' }}>
                {/* Render multiple times to create seamless loop illusion */}
                {Array.from({ length: 4 }).map((_, i) => (
                    <motion.h2
                        key={i}
                        style={{
                            fontSize: 'clamp(3rem, 6vw, 6rem)',
                            lineHeight: 1,
                            skewX,
                            margin: 0,
                            marginRight: '30px',
                            fontWeight: 900
                        }}
                    >
                        {children}
                    </motion.h2>
                ))}
            </motion.div>
        </div>
    );
};

export default KineticText;
