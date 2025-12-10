import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

const works = [
    {
        title: "Neon Genesis",
        category: "Simulation",
        videoUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4", // Blender Open Movie (Tears of Steel trailer loop or similar)
        placeholderImage: "https://images.unsplash.com/photo-1635322966219-b75ed3a90122?auto=format&fit=crop&q=80&w=1600"
    },
    {
        title: "Ethereal Glass",
        category: "Abstract/Art",
        videoUrl: "https://www.youtube.com/watch?v=WhWc3b3KhnY", // Spring (Blender Open Movie)
        placeholderImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600"
    },
    {
        title: "Metallic Core",
        category: "Product TVC",
        videoUrl: "https://www.youtube.com/watch?v=wXIXF4rR1_g", // Hero Movie (Blender)
        placeholderImage: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&q=80&w=1600"
    },
    {
        title: "Liquid Gold",
        category: "Simulation",
        videoUrl: "https://www.youtube.com/watch?v=mN0zPOpADL4", // Agent 327
        placeholderImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600&hue=50"
    },
    {
        title: "Tech Reveal",
        category: "Product TVC",
        videoUrl: "https://www.youtube.com/watch?v=YE7VzlLtp-4", // Big Buck Bunny
        placeholderImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1600"
    }
];

const categories = ["All", "Product TVC", "Abstract/Art", "Simulation"];

const SelectedWorks = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredWorks = activeFilter === "All"
        ? works
        : works.filter(work => work.category === activeFilter);

    return (
        <section style={{ padding: '120px 0', background: 'var(--bg-color)', position: 'relative', zIndex: 10 }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '60px', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px' }}>
                    <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-secondary)', margin: 0 }}>
                        Gallery of Motion
                    </h2>

                    {/* Tabs */}
                    <div style={{ display: 'flex', gap: '20px' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                style={{
                                    fontSize: '0.9rem',
                                    color: activeFilter === cat ? 'var(--text-primary)' : 'var(--text-secondary)',
                                    fontWeight: activeFilter === cat ? 600 : 400,
                                    cursor: 'pointer',
                                    textTransform: 'uppercase',
                                    transition: 'color 0.2s'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))',
                        gap: '40px'
                    }}
                >
                    <AnimatePresence>
                        {filteredWorks.map((work, index) => (
                            <motion.div
                                key={work.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard {...work} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default SelectedWorks;
