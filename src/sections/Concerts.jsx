import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { MapPin, Calendar, Ticket } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const concerts = [
    {
        id: 1,
        date: "MAR 15",
        city: "Miami, FL",
        venue: "Ultra Music Festival",
        image: `${import.meta.env.BASE_URL}images/concert-1.jpg`,
        status: "Selling Fast"
    },
    {
        id: 2,
        date: "APR 02",
        city: "Berlin, DE",
        venue: "Berghain",
        image: `${import.meta.env.BASE_URL}images/concert-2.jpg`,
        status: "Sold Out"
    },
    {
        id: 3,
        date: "MAY 20",
        city: "Las Vegas, NV",
        venue: "EDC Las Vegas",
        image: `${import.meta.env.BASE_URL}images/concert-3.jpg`,
        status: "Available"
    },
    {
        id: 4,
        date: "JUN 10",
        city: "Ibiza, ES",
        venue: "Amnesia",
        image: `${import.meta.env.BASE_URL}images/concert-4.jpg`,
        status: "Selling Fast"
    },
    {
        id: 5,
        date: "JUL 05",
        city: "Boom, BE",
        venue: "Tomorrowland",
        image: `${import.meta.env.BASE_URL}images/concert-5.jpg`,
        status: "Waitlist"
    },
    {
        id: 6,
        date: "AUG 18",
        city: "Tokyo, JP",
        venue: "Womb",
        image: `${import.meta.env.BASE_URL}images/concert-6.jpg`,
        status: "Available"
    }
];

function ConcertCard({ concert, index }) {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative group w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(176,38,255,0.6)] transition-all duration-500"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="absolute inset-0 bg-gray-900 rounded-3xl"
            >
                <img
                    src={concert.image}
                    alt={`${concert.venue} Concert`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                    {concert.status}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-z-10 group-hover:translate-y-[-10px] transition-transform duration-300">
                    <div className="flex items-center gap-2 text-neon-blue font-bold mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{concert.date}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-neon-purple transition-colors">
                        {concert.venue}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-300 text-sm mb-4">
                        <MapPin className="w-4 h-4" />
                        {concert.city}
                    </div>

                    <button className="w-full py-3 border border-white/30 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-neon-purple group-hover:border-neon-purple group-hover:text-white transition-all duration-300 bg-white/5 backdrop-blur-sm">
                        <Ticket className="w-4 h-4" />
                        Get Tickets
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default function Concerts() {
    return (
        <section id="concerts" className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-display font-bold mb-4 relative inline-block"
                        >
                            UPCOMING <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-gradient">TOURS</span>
                        </motion.h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Experience the sonic journey live. Join thousands of fans at the world's most iconic venues.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                    {concerts.map((concert, index) => (
                        <AnimatedSection key={concert.id} delay={index * 0.1}>
                            <ConcertCard concert={concert} index={index} />
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
