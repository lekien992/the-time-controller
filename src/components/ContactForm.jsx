import React, { useState } from 'react';
import MagneticButton from './ui/MagneticButton';

const ContactForm = () => {
    // FORM CONFIGURATION - REPLACE THIS URL
    // Web App URL from Google Apps Script
    // Web App URL from Google Apps Script
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby_KN9q1ByvTLRHWoDHFPWNMLJsQcCyydMAOH0gRX-D01Ho6wuoZfzdt5gSCgAJAFEPKw/exec";


    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Type: 'Project Type', // Default placeholder
        Budget: 'Budget Range', // Default placeholder
        Details: ''
    });

    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic Validation
        if (!formData.Name || !formData.Email || formData.Type === 'Project Type' || formData.Budget === 'Budget Range') {
            alert("Please fill in all required fields.");
            return;
        }

        setStatus('submitting');

        try {
            // Use 'no-cors' mode for Google Apps Script to avoid CORS errors on client side
            // Note: In 'no-cors', we can't read the response JSON, but it submits successfully.
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(formData),
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Since we can't verify 'no-cors' response, assume success if no network error thrown
            setStatus('success');
            setFormData({
                Name: '',
                Email: '',
                Type: 'Project Type',
                Budget: 'Budget Range',
                Details: ''
            });
            setTimeout(() => setStatus('idle'), 5000);

        } catch (error) {
            console.error("Error submitting form", error);
            setStatus('error');
        }
    };

    // Styling constants
    const inputStyle = {
        width: '100%',
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid #333',
        padding: '15px 0',
        color: '#fff',
        outline: 'none',
        fontSize: '1rem',
        transition: 'border-color 0.3s'
    };

    const selectStyle = {
        ...inputStyle,
        color: formData.Type === 'Project Type' || formData.Budget === 'Budget Range' ? '#666' : '#fff',
        cursor: 'pointer'
    };

    return (
        <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
            {status === 'success' ? (
                <div style={{ padding: '40px', background: '#111', borderRadius: '20px', textAlign: 'center', border: '1px solid #333' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#4CAF50' }}>Message Sent!</h3>
                    <p style={{ color: '#888' }}>Thank you. I'll get back to you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    {/* Name */}
                    <input
                        type="text"
                        name="Name"
                        placeholder="Name / Company *"
                        value={formData.Name}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => e.target.style.borderBottom = '1px solid #fff'}
                        onBlur={(e) => e.target.style.borderBottom = '1px solid #333'}
                    />

                    {/* Email */}
                    <input
                        type="email"
                        name="Email"
                        placeholder="Email Address *"
                        value={formData.Email}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => e.target.style.borderBottom = '1px solid #fff'}
                        onBlur={(e) => e.target.style.borderBottom = '1px solid #333'}
                    />

                    {/* Project Type */}
                    <div style={{ position: 'relative' }}>
                        <select
                            name="Type"
                            value={formData.Type}
                            onChange={handleChange}
                            style={selectStyle}
                        >
                            <option value="Project Type" disabled>Project Type *</option>
                            <option value="3D Motion">3D Motion</option>
                            <option value="Brand Identity">Brand Identity</option>
                            <option value="Product Reveal">Product Reveal</option>
                            <option value="Visual Simulation">Visual Simulation</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Budget */}
                    <div style={{ position: 'relative' }}>
                        <select
                            name="Budget"
                            value={formData.Budget}
                            onChange={handleChange}
                            style={selectStyle}
                        >
                            <option value="Budget Range" disabled>Budget Range *</option>
                            <option value="< $1,000">&lt; $1,000</option>
                            <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                            <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                            <option value="> $5,000">&gt; $5,000</option>
                        </select>
                    </div>

                    {/* Details */}
                    <textarea
                        name="Details"
                        placeholder="Tell me about your project..."
                        value={formData.Details}
                        onChange={handleChange}
                        style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
                        onFocus={(e) => e.target.style.borderBottom = '1px solid #fff'}
                        onBlur={(e) => e.target.style.borderBottom = '1px solid #333'}
                    />

                    {/* Submit Button */}
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                        <MagneticButton type="submit" disabled={status === 'submitting'}>
                            {status === 'submitting' ? 'Sending...' : 'Send Request'}
                        </MagneticButton>
                    </div>

                    {status === 'error' && (
                        <p style={{ color: 'red', textAlign: 'center', fontSize: '0.9rem' }}>
                            Something went wrong. Please try email instead.
                        </p>
                    )}
                </form>
            )}
        </div>
    );
};

export default ContactForm;
