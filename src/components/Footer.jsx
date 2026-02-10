import { Music, Instagram, Twitter, Facebook, Youtube, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Equalizer from './Equalizer';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="relative bg-black border-t border-neon-purple/20 overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex items-center gap-2 mb-4">
              <Equalizer bars={4} className="h-6" />
              <Music className="w-8 h-8 text-neon-purple" />
              <span className="text-2xl font-display font-bold">
                NOVA<span className="text-neon-blue">BEATS</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Bringing the energy of electronic music to stages worldwide.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-lg font-bold mb-4 text-neon-blue">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {['Home', 'Concerts', 'Gallery', 'About', 'Booking'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-neon-purple transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <h3 className="text-lg font-bold mb-4 text-neon-blue">Connect</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-neon-purple/20 hover:border-neon-purple transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="flex gap-2 w-full max-w-xs">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-neon-blue transition-colors"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg hover:shadow-[0_0_20px_rgba(176,38,255,0.6)] transition-all duration-300">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DJ Nova Beats. All rights reserved. | Designed with 🎵 for music lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
