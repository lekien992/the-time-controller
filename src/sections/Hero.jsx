import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SplineScene from '../components/SplineScene';
import Button from '../components/ui/Button';
import SpotlightText from '../components/ui/SpotlightText';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // "Explode" effect simulation
    // As user starts scrolling (0 to 300px), the scene scales up and rotates
    const scale = useTransform(scrollY, [0, 300], [1, 1.5]);
    const rotate = useTransform(scrollY, [0, 300], [0, 15]);
    const opacity = useTransform(scrollY, [0, 200], [1, 0]); // Fade out text quickly
    const sceneOpacity = useTransform(scrollY, [0, 500], [1, 0.2]); // Dim scene as we move to content

    return (
        <section
            ref={containerRef}
            style={{
                position: 'relative',
                width: '100%',
                height: '150vh', // Extended height to internalize the scroll effect
                overflow: 'hidden',
                marginBottom: '-50vh' // Overlap with next section
            }}
        >
            {/* Sticky Container for 3D Scene */}
            <div style={{ position: 'sticky', top: 0, width: '100%', height: '100vh', overflow: 'hidden' }}>
                <motion.div style={{ width: '100%', height: '100%', scale, rotate, opacity: sceneOpacity }}>
                    {/* Placeholder Scene - Ideally this scene reacts to 'scroll' events internally too */}
                    <SplineScene sceneUrl="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
                </motion.div>
            </div>

            {/* Overlay Content (Fades out on scroll) */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity,
                    zIndex: 10,
                    height: '100vh',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pointerEvents: 'none',
                    textAlign: 'center'
                }}
            >
                <div style={{ pointerEvents: 'auto' }}>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            fontSize: 'clamp(4rem, 8vw, 8rem)',
                            lineHeight: 1,
                            letterSpacing: '-0.03em',
                            textShadow: '0 0 40px rgba(255,255,255,0.1)'
                        }}
                    >
                        THE TIME <br />
                        <SpotlightText className="text-gradient">CONTROLLER</SpotlightText>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            fontSize: '1.25rem',
                            marginTop: '1.5rem',
                            color: 'var(--text-secondary)',
                        }}
                    >
                        I craft purposefully fluid motion.
                    </motion.p>
                </div>

                {/* Scroll Hint */}
                <motion.div
                    style={{ position: 'absolute', bottom: '3rem' }}
                    animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll to Explode</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
