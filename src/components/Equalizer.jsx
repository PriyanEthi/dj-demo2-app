import { motion } from 'framer-motion';

export default function Equalizer({ bars = 5, className = "" }) {
  return (
    <div className={`flex items-end gap-1 h-8 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-gradient-to-t from-neon-purple to-neon-blue rounded-full"
          animate={{
            height: ['20%', '100%', '40%', '80%', '20%'],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}
