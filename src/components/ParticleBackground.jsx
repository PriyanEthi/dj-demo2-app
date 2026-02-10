import { motion } from 'framer-motion';

export default function ParticleBackground() {
  const particles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-neon-blue rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
          style={{
            boxShadow: '0 0 10px rgba(94, 234, 212, 0.8)',
          }}
        />
      ))}
    </div>
  );
}
