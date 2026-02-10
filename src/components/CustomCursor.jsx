import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            // Check if the hovered element or its parents are interactive
            if (e.target.closest('a, button, input, textarea, .glass-card, [role="button"]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main Cursor (Dot) */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-neon-blue rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 0 : 1
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
            />

            {/* Trailing Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-neon-purple rounded-full pointer-events-none z-[9998] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? 'rgba(176, 38, 255, 0.2)' : 'transparent',
                    borderColor: isHovering ? 'transparent' : '#b026ff'
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.8 }}
            />
        </>
    );
}
