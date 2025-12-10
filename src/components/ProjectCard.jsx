import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, category, videoUrl, placeholderImage }) => {
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Helper to extract YouTube ID
    const getYoutubeId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url?.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const youtubeId = getYoutubeId(videoUrl);
    const isYoutube = !!youtubeId;

    return (
        <motion.div
            className="project-card"
            style={{ position: 'relative', cursor: 'pointer', overflow: 'hidden', borderRadius: '4px' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
        >
            <div style={{ position: 'relative', aspectRatio: '16/9', background: '#111' }}>
                {/* Video Layer */}
                {isYoutube ? (
                    // YouTube Embed
                    isHovered && (
                        <iframe
                            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${youtubeId}`}
                            title={title}
                            width="100%"
                            height="100%"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                border: 'none',
                                pointerEvents: 'none' // Prevent hijacking scroll
                            }}
                            allow="autoplay; encrypted-media"
                        />
                    )
                ) : (
                    // Standard Video
                    <video
                        ref={videoRef}
                        src={videoUrl}
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: isHovered ? 1 : 0,
                            transition: 'opacity 0.3s ease'
                        }}
                    />
                )}

                {/* Placeholder / Static Thumbnail Layer (Visible when not hovered) */}
                <img
                    src={placeholderImage}
                    alt={title}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: isHovered ? 0 : 1,
                        transition: 'opacity 0.3s ease',
                        zIndex: 1 // Keep above video until switched
                    }}
                />

                {/* Overlay Info */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    padding: '20px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    pointerEvents: 'none',
                    zIndex: 2
                }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '4px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{title}</h3>
                    <span style={{ fontSize: '0.9rem', color: '#ccc', textTransform: 'uppercase', letterSpacing: '1px' }}>{category}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
