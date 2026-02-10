import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink origin-left z-[10000] shadow-[0_0_10px_rgba(176,38,255,0.8)]"
                style={{ scaleX }}
            />
            <motion.div
                className="fixed top-1 left-0 right-0 h-px bg-white/20 origin-left z-[9999]"
                style={{ scaleX }}
            />
        </>
    );
}
