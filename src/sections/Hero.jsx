import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import ParticleBackground from '../components/ParticleBackground';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Particle Background */}
            <ParticleBackground />
            
            {/* Background Image & Gradient */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <img
                    src="/images/hero-bg.jpg"
                    alt="Concert Crowd"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)]" />
            </motion.div>

            {/* Animated Glow Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/30 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-blue/20 rounded-full blur-[120px] pointer-events-none"
            />

            {/* Dynamic Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
            >
                <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">Scroll</span>
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="w-1.5 h-1.5 bg-neon-blue rounded-full shadow-[0_0_10px_#5eead4]"
                    />
                </div>
            </motion.div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6"
                >
                    <h2 className="text-neon-blue font-bold tracking-[0.2em] text-sm md:text-lg mb-4 uppercase">
                        Live EDM • House • Festival Energy
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-display font-black text-white tracking-tight mb-2 relative inline-block">
                        <span className="relative z-10 inline-block">
                            {"DJ NOVA BEATS".split('').map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: 0 }}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                        ease: "easeInOut"
                                    }}
                                    className="inline-block"
                                >
                                    {char === ' ' ? '\u00A0' : char}
                                </motion.span>
                            ))}
                        </span>
                        <span className="absolute inset-0 text-neon-purple blur-lg opacity-50 z-0">DJ NOVA BEATS</span>
                    </h1>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
                >
                    <a
                        href="#booking"
                        className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(176,38,255,0.8)] transition-all duration-300 flex items-center gap-2 group transform hover:scale-105"
                    >
                        Book Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#concerts"
                        className="px-8 py-4 border-2 border-neon-blue/50 hover:border-neon-blue text-white font-bold text-lg rounded-full backdrop-blur-sm bg-white/5 hover:bg-neon-blue/20 hover:shadow-[0_0_30px_rgba(94,234,212,0.6)] transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
                    >
                        <Play className="w-5 h-5 fill-current" />
                        View Concerts
                    </a>
                </motion.div>

                {/* Stats with Animated Counters */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-white/10 pt-8"
                >
                    <div className="text-center group">
                        <div className="text-2xl md:text-4xl font-display font-bold text-white mb-1 group-hover:text-neon-purple transition-colors">
                            <AnimatedCounter end={120} suffix="+" />
                        </div>
                        <div className="text-gray-400 text-sm uppercase tracking-wider">Live Shows</div>
                    </div>
                    <div className="text-center group">
                        <div className="text-2xl md:text-4xl font-display font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">
                            <AnimatedCounter end={50} suffix="K" />
                        </div>
                        <div className="text-gray-400 text-sm uppercase tracking-wider">Fans</div>
                    </div>
                    <div className="text-center group">
                        <div className="text-2xl md:text-4xl font-display font-bold text-white mb-1 group-hover:text-neon-pink transition-colors">
                            <AnimatedCounter end={15} />
                        </div>
                        <div className="text-gray-400 text-sm uppercase tracking-wider">Countries</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
