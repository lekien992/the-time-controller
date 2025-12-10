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

                <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                    <SpotlightText
                        style={{ fontSize: '15vw', fontWeight: '900', letterSpacing: '-0.05em', margin: 0, lineHeight: 1 }}
                    >
                        Let's Talk?
                    </SpotlightText>

                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <MagneticButton href="mailto:lekien992@gmail.com">
                            Send Email
                        </MagneticButton>

                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); alert("Please update this link with your Google Form URL!"); }}
                            style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem', padding: '20px 40px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50px', transition: 'all 0.3s ease' }}
                            onMouseEnter={(e) => { e.target.style.borderColor = '#fff'; e.target.style.background = 'rgba(255,255,255,0.1)'; }}
                            onMouseLeave={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.2)'; e.target.style.background = 'transparent'; }}
                        >
                            Project Brief
                        </a>
                    </div>
                </div>
                <div style={{ marginTop: '100px', borderTop: '1px solid #111', paddingTop: '40px', color: '#444', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div>
                        &copy; {new Date().getFullYear()} The Time Controller. <span style={{ opacity: 0.3, fontSize: '0.8em' }}>v1.1</span>
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
