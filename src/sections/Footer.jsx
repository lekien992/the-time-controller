import React from 'react';
import SpotlightText from '../components/ui/SpotlightText';

const Footer = () => {
    return (
        <section style={{ position: 'relative', background: '#000', color: '#fff', padding: '100px 20px', overflow: 'hidden' }}>
            {/* ... preserved background effects ... */}

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to <SpotlightText className="text-gradient">Move?</SpotlightText></h2>

                <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                    <SpotlightText
                        style={{ fontSize: '15vw', fontWeight: '900', letterSpacing: '-0.05em', margin: 0, lineHeight: 1 }}
                    >
                        Let's Talk?
                    </SpotlightText>

                    {/* Embedded Google Form Container */}
                    <div style={{
                        width: '100%',
                        maxWidth: '640px',
                        height: '800px',
                        background: '#111',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        border: '1px solid #333',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                        margin: '20px 0'
                    }}>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSf4mQLU9zjb1JAUW6kXsK9nlOLGcFE9yxsDK36beJ2KiFsOrQ/viewform?embedded=true"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            title="Project Request Form"
                            style={{ background: '#fff' }}
                        >
                            Loading form...
                        </iframe>
                    </div>

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
