import React from 'react';
import MagneticButton from '../components/ui/MagneticButton';
import KineticText from '../components/ui/KineticText';
import SpotlightText from '../components/ui/SpotlightText';

const Footer = () => {
    return (
        <footer id="contact" style={{ padding: '0 0 60px', background: '#050505', borderTop: '1px solid #111', overflow: 'hidden' }}>

            {/* Footer Marquee */}
            <div style={{ padding: '60px 0', opacity: 0.2 }}>
                <KineticText baseVelocity={-2}>LET'S MOVE — LET'S CREATE — </KineticText>
            </div>

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to <SpotlightText className="text-gradient">Move?</SpotlightText></h2>

                <div style={{ margin: '60px auto' }}>
                    <MagneticButton onClick={() => alert("Open Contact Form or Mailto")}>
                        Start a Project
                    </MagneticButton>
                </div>

                <div style={{ marginTop: '100px', borderTop: '1px solid #111', paddingTop: '40px', color: '#444', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div>
                        &copy; {new Date().getFullYear()} The Time Controller.
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="#" style={{ color: '#666', transition: 'color 0.2s' }}>Instagram</a>
                        <a href="#" style={{ color: '#666', transition: 'color 0.2s' }}>ArtStation</a>
                        <a href="#" style={{ color: '#666', transition: 'color 0.2s' }}>LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
