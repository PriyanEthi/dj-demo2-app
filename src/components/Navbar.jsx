import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Music } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Concerts', href: '#concerts' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'About', href: '#about' },
        { name: 'Booking', href: '#booking' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-neon-purple/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <motion.a 
                    href="#" 
                    className="flex items-center gap-2 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div
                        animate={{ rotate: scrolled ? 0 : 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <Music className="w-8 h-8 text-neon-purple group-hover:text-neon-pink transition-colors duration-300" />
                    </motion.div>
                    <span className="text-2xl font-display font-bold tracking-widest text-white">
                        NOVA<span className="text-neon-blue">BEATS</span>
                    </span>
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-sm uppercase tracking-wider font-semibold relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>
                    ))}
                    <motion.a
                        href="#booking"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold uppercase tracking-wider rounded-full hover:shadow-[0_0_30px_rgba(176,38,255,0.6)] transition-all duration-300"
                    >
                        Book Now
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-neon-purple transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden"
                    >
                        <div className="flex flex-col p-6 gap-4 items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-white text-lg font-semibold hover:text-neon-blue transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#booking"
                                className="mt-4 px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold rounded-full w-full text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Book Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
