import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const galleryImages = [
    {
        id: 1,
        title: "Ultra Music Festival",
        location: "Miami",
        year: "2025",
        url: `${import.meta.env.BASE_URL}images/gallery-1.jpg`,
        span: "col-span-1 md:col-span-2 row-span-2"
    },
    {
        id: 2,
        title: "Tomorrowland",
        location: "Belgium",
        year: "2024",
        url: `${import.meta.env.BASE_URL}images/gallery-2.jpg`,
        span: "col-span-1"
    },
    {
        id: 3,
        title: "EDC Las Vegas",
        location: "Las Vegas",
        year: "2024",
        url: `${import.meta.env.BASE_URL}images/gallery-3.jpg`,
        span: "col-span-1"
    },
    {
        id: 4,
        title: "Creamfields",
        location: "UK",
        year: "2023",
        url: `${import.meta.env.BASE_URL}images/gallery-4.jpg`,
        span: "col-span-1 md:col-span-2"
    },
    {
        id: 5,
        title: "Coachella",
        location: "California",
        year: "2023",
        url: `${import.meta.env.BASE_URL}images/gallery-5.jpg`,
        span: "col-span-1"
    }
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
            {/* Animated Light Beams */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-blue to-transparent animate-pulse" />
                <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-neon-purple to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <AnimatedSection>
                    <motion.h2
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-bold mb-12 text-right"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-white via-gray-300 to-gray-500">PAST</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">CONCERTS</span>
                    </motion.h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
                    {galleryImages.map((item, index) => (
                        <AnimatedSection key={item.id} delay={index * 0.15}>
                            <motion.div
                                whileHover={{ scale: 1.05, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className={`relative group overflow-hidden rounded-2xl h-full shadow-lg hover:shadow-[0_20px_50px_rgba(94,234,212,0.4)] transition-shadow duration-500 ${item.span}`}
                            >
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <motion.h3 
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        className="text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                    >
                                        {item.title}
                                    </motion.h3>
                                    <p className="text-neon-blue text-sm uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {item.location} • {item.year}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
