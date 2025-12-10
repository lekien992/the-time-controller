import React from 'react';
import { motion } from 'framer-motion';
import KineticText from '../components/ui/KineticText';
import SpotlightText from '../components/ui/SpotlightText';

const Introduction = () => {
    return (
        <section
            id="about"
            style={{
                padding: '120px 0',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 10,
                background: 'var(--bg-color)',
                overflow: 'hidden'
            }}
        >
            <div style={{ marginBottom: '4rem', opacity: 0.8, textAlign: 'center' }}>
                <KineticText>MOTION WITH MEANING</KineticText>
                <KineticText>SCROLL TO CONTROL</KineticText>
            </div>

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
                >
                    <p style={{ fontSize: '1.5rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>
                        Motion isn't just movement. It's <SpotlightText className="text-gradient">Storytelling</SpotlightText>.
                    </p>
                    <p style={{ fontSize: '1.2rem', marginTop: '1.5rem' }}>
                        I specialize in transforming static concepts into premium, interactive experiences.
                        From liquid metal simulations to high-end product visualization, I bridge the gap between imagination and reality.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Introduction;
