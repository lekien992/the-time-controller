import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
    {
        title: "Brief & Concept",
        description: "We start by defining the core message and visual direction. I create moodboards and sketches to align on the vision before opening any 3D software."
    },
    {
        title: "Styleframe (Lighting Check)",
        description: "I develop high-fidelity still frames to lock in lighting, materials, and composition. This is the critical phase where the 'look' is finalized."
    },
    {
        title: "Animation & Motion",
        description: "Bringing scenes to life with realistic physics and camera movements. I focus on weight, timing, and smooth easing to create a premium feel."
    },
    {
        title: "Final Render & Compositing",
        description: "The machine takes over, but the work isn't done. Post-processing, color grading, and compositing add that final layer of polish and atmosphere."
    }
];

const Process = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section ref={containerRef} style={{ padding: '150px 0', position: 'relative', background: 'var(--bg-color)' }}>
            <div className="container">
                <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-secondary)', marginBottom: '100px', textAlign: 'center' }}>
                    The Process
                </h2>

                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Central Line Background */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'var(--border-color)',
                        // Center the line relative to the dots? Dot is 16px, center is 8px. Line is 2px, center is 1px.
                        // Left 20px is arbitrary, let's say dot center is "left: 0" in a relative container? 
                        // Better to align everything carefully.
                        transform: 'translateX(9px)' // aligns with dot center (20px margin-left of content means dot is at x=0? No.)
                        // Let's rely on visual alignment in content.
                    }} />

                    {/* Animated Line Progress */}
                    <motion.div style={{
                        position: 'absolute',
                        left: '20px',
                        top: 0,
                        width: '2px',
                        background: 'var(--text-primary)',
                        transform: 'translateX(9px)',
                        height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                        transformOrigin: 'top'
                    }} />

                    {/* Steps */}
                    {steps.map((step, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            marginBottom: index === steps.length - 1 ? 0 : '100px',
                            position: 'relative'
                        }}>
                            {/* Dot */}
                            <motion.div
                                initial={{ scale: 0, boxShadow: "0 0 0 0px rgba(255, 255, 255, 0)" }}
                                whileInView={{ scale: 1, boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.1)" }}
                                viewport={{ margin: "-20% 0px -20% 0px" }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    background: 'var(--bg-color)',
                                    border: '2px solid var(--text-primary)',
                                    borderRadius: '50%',
                                    flexShrink: 0,
                                    zIndex: 2,
                                    marginTop: '0px'
                                }}
                            />

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                style={{ marginLeft: '40px' }}
                            >
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{step.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{step.description}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
