import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const skills = [
    { name: 'Crowd Energy', value: 95 },
    { name: 'Beat Mixing', value: 90 },
    { name: 'Live Performance', value: 100 },
    { name: 'Track Selection', value: 85 },
];

export default function About() {
    return (
        <section id="about" className="py-24 px-6 relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
            {/* Animated Background Orbs */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-neon-blue/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }} />
            
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">

                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                >
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-neon-purple to-neon-blue opacity-30 blur-lg transition duration-500 group-hover:opacity-100" />
                        <img
                            src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                            alt="DJ Profile"
                            className="relative rounded-2xl w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl shadow-neon-purple/20"
                        />
                    </div>
                </motion.div>

                {/* Text Side */}
                <AnimatedSection className="w-full md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">ARTIST</span>
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        With over a decade of dominating the underground scene and main stages alike, DJ NOVA BEATS brings an electrifying fusion of deep house rythms and explosive festival energy. Known for mind-bending drops and a connection with the crowd that defies explanation.
                    </p>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        From intimacy of dark clubs in Berlin to the massive stages of Miami, the mission remains the same: <span className="text-white font-bold">Unite the world through sound.</span>
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                        {['EDM', 'Techno', 'Deep House', 'Psytrance', 'Festival Sets'].map((tag) => (
                            <span key={tag} className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-wider hover:border-neon-blue hover:text-neon-blue transition-colors cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="space-y-6">
                        {skills.map((skill, index) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-bold uppercase tracking-wider">{skill.name}</span>
                                    <span className="text-sm text-neon-blue">{skill.value}%</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.value}%` }}
                                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                                        viewport={{ once: true }}
                                        className="h-full bg-gradient-to-r from-neon-purple to-neon-blue shadow-[0_0_10px_rgba(176,38,255,0.5)]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
