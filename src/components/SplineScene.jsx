import React, { useState, Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const SplineScene = ({ sceneUrl, className = '' }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`spline-wrapper ${className}`} style={{ width: '100%', height: '100%', position: 'relative' }}>
            {isLoading && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)'
                }}>
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        Loading 3D Experience...
                    </motion.div>
                </div>
            )}

            <Spline
                scene={sceneUrl}
                onLoad={() => setIsLoading(false)}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default SplineScene;
