import React from 'react';
import SpotlightText from '../components/ui/SpotlightText';
import ContactForm from '../components/ContactForm';
import MagneticButton from '../components/ui/MagneticButton'; // Kept if needed for other buttons, though ContactForm has its own.

const Footer = () => {
    return (
        <section style={{ position: 'relative', background: '#000', color: '#fff', padding: '100px 20px', overflow: 'hidden' }}>
            {/* Background effects could be added here if needed, keeping it clean for now as per previous version */}

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to <SpotlightText className="text-gradient">Move?</SpotlightText></h2>

                <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                    <SpotlightText
                        style={{ fontSize: '15vw', fontWeight: '900', letterSpacing: '-0.05em', margin: 0, lineHeight: 1 }}
                    >
                        Let's Talk?
                    </SpotlightText>

                    {/* Custom Contact Form connected to Google Sheets */}
                    <ContactForm />

                    {/* Secondary - Direct Email */}
                    <div style={{ fontSize: '1rem', color: '#888' }}>
                        Or email directly: <a href="mailto:lekien992@gmail.com" style={{ color: '#fff', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '2px' }}>lekien992@gmail.com</a>
                    </div>
                </div>

                <div style={{ marginTop: '100px', borderTop: '1px solid #111', paddingTop: '40px', color: '#444', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div>
                        &copy; {new Date().getFullYear()} The Time Controller. <span style={{ opacity: 0.3, fontSize: '0.8em' }}>v1.1</span>
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="#" style={{ color: '#666', transition: 'color 0.2s' }}>Instagram</a>
                        <a href="#" style={{ color: '#666', transition: 'color 0.2s' }}>Twitter</a>
                        <a href="#" style={{ color: '#666', transition: 'color 0.2s' }}>LinkedIn</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
