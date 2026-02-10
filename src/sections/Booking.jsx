import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, Loader2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const timeSlots = [
    "18:00 - 21:00",
    "21:00 - 00:00",
    "00:00 - 03:00",
    "Festival Run (6h+)"
];

const prices = {
    "18:00 - 21:00": "$500",
    "21:00 - 00:00": "$800",
    "00:00 - 03:00": "$1200",
    "Festival Run (6h+)": "Custom"
};

export default function Booking() {
    const [step, setStep] = useState(1); // 1: Date, 2: Time, 3: Details
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [isLoadingSlots, setIsLoadingSlots] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        location: '',
        type: 'Club Event',
        message: ''
    });

    // Calendar Logic
    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month, 1).getDay();
    };

    const generateCalendar = () => {
        const daysInMonth = getDaysInMonth(currentMonth);
        const firstDay = getFirstDayOfMonth(currentMonth);
        const days = [];

        // Empty slots for previous month
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="p-2" />);
        }

        // Days
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
            const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
            const isPast = date < new Date().setHours(0, 0, 0, 0);

            days.push(
                <button
                    key={day}
                    disabled={isPast}
                    onClick={() => handleDateSelect(date)}
                    className={`
                        p-2 rounded-lg text-sm font-bold transition-all duration-200 relative
                        ${isSelected ? 'bg-neon-purple text-white shadow-[0_0_15px_rgba(176,38,255,0.5)]' : 'text-gray-300 hover:bg-white/10'}
                        ${isPast ? 'opacity-20 cursor-not-allowed' : ''}
                    `}
                >
                    {day}
                    {!isPast && !isSelected && (
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-neon-blue rounded-full opacity-50" />
                    )}
                </button>
            );
        }
        return days;
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setStep(2);
        setIsLoadingSlots(true);
        // Simulate checking availability
        setTimeout(() => {
            setIsLoadingSlots(false);
        }, 1500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const prevMonth = () => {
        const now = new Date();
        if (currentMonth > now) {
            setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
        }
    };

    return (
        <section id="booking" className="py-24 px-4 md:px-6 bg-dark-bg relative overflow-hidden min-h-screen flex items-center">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-purple/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="max-w-6xl mx-auto w-full relative z-10">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-display font-black mb-6 tracking-tight text-white"
                        >
                            SECURE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">VIBE</span>
                        </motion.h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Select your date, pick a slot, and let's create history.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Panel: Calendar & Time (Steps 1 & 2) */}
                    <AnimatedSection className="lg:col-span-5 space-y-6">
                        {/* Calendar Card */}
                        <div className={`glass-card p-6 md:p-8 transition-all duration-500 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}>
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <CalendarIcon className="w-5 h-5 text-neon-blue" />
                                    Select Date
                                </h3>
                                <div className="flex gap-2">
                                    <button onClick={prevMonth} className="p-1 hover:text-neon-blue transition-colors"><ChevronLeft /></button>
                                    <span className="font-mono text-neon-purple font-bold">
                                        {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                                    </span>
                                    <button onClick={nextMonth} className="p-1 hover:text-neon-blue transition-colors"><ChevronRight /></button>
                                </div>
                            </div>
                            <div className="grid grid-cols-7 gap-2 text-center mb-2 text-xs font-bold text-gray-500 uppercase">
                                <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                            </div>
                            <div className="grid grid-cols-7 gap-2">
                                {generateCalendar()}
                            </div>
                        </div>

                        {/* Tiime Slots Card */}
                        <AnimatePresence mode="wait">
                            {step >= 2 && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="glass-card p-6 md:p-8"
                                >
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                                        <Clock className="w-5 h-5 text-neon-pink" />
                                        Available Slots
                                    </h3>

                                    {isLoadingSlots ? (
                                        <div className="flex flex-col items-center justify-center py-8 space-y-4 text-gray-400">
                                            <Loader2 className="w-8 h-8 animate-spin text-neon-blue" />
                                            <span className="text-sm animate-pulse">Checking DJ availability...</span>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {timeSlots.map((slot) => (
                                                <button
                                                    key={slot}
                                                    onClick={() => { setSelectedSlot(slot); setStep(3); }}
                                                    className={`
                                                        p-4 rounded-xl border text-left transition-all duration-300 group
                                                        ${selectedSlot === slot
                                                            ? 'bg-neon-pink/20 border-neon-pink text-white shadow-[0_0_15px_rgba(244,114,182,0.3)]'
                                                            : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:bg-white/10'}
                                                    `}
                                                >
                                                    <div className="font-bold text-sm mb-1">{slot}</div>
                                                    <div className={`text-xs ${selectedSlot === slot ? 'text-neon-pink' : 'text-gray-500 group-hover:text-gray-300'}`}>
                                                        {prices[slot]}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </AnimatedSection>

                    {/* Right Panel: Booking Form (Step 3) */}
                    <AnimatedSection delay={0.2} className="lg:col-span-7">
                        <div className={`glass-card p-8 h-full relative overflow-hidden transition-all duration-500 ${step >= 3 ? 'opacity-100 grayscale-0 pointer-events-auto' : 'opacity-30 grayscale pointer-events-none'}`}>
                            {step < 3 && (
                                <div className="absolute inset-0 flex items-center justify-center z-10 backdrop-blur-[2px]">
                                    <div className="bg-black/80 px-6 py-3 rounded-full border border-white/10 text-gray-400 text-sm">
                                        Select a date & time to unlock
                                    </div>
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Event Details</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Contact Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all outline-none"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all outline-none"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Event Location</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all outline-none pl-10 bg-[url('https://api.iconify.design/lucide:map-pin.svg?color=gray')] bg-[length:18px] bg-no-repeat bg-[14px_center]"
                                        placeholder="City, Country or Venue Name"
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Message / Special Requests</label>
                                    <textarea
                                        className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all outline-none h-32 resize-none"
                                        placeholder="Tell us about the vibe, estimated crowd size, or any specific genre requests..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full py-5 bg-gradient-to-r from-neon-purple via-fuchsia-500 to-neon-pink text-white font-black text-lg uppercase tracking-widest rounded-xl shadow-[0_0_30px_rgba(176,38,255,0.4)] hover:shadow-[0_0_50px_rgba(176,38,255,0.6)] transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                                    >
                                        <span className="relative z-10">Confirm Booking</span>
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* Success Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-zinc-900 p-1 w-full max-w-lg rounded-3xl border border-white/10 shadow-2xl"
                        >
                            <div className="bg-black rounded-[20px] p-8 text-center relative overflow-hidden">
                                <div className="absolute -top-20 -left-20 w-40 h-40 bg-neon-purple/30 blur-[60px] rounded-full" />
                                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-neon-blue/30 blur-[60px] rounded-full" />

                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-gradient-to-tr from-neon-purple to-neon-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-neon">
                                        <CheckCircle className="w-10 h-10 text-white" />
                                    </div>

                                    <h3 className="text-3xl font-display font-bold text-white mb-2">BOOKING REQUESTED</h3>
                                    <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                                        Your request for <span className="text-white font-bold">{selectedDate?.toLocaleDateString()}</span> at <span className="text-white font-bold">{selectedSlot}</span> has been sent. We'll be in touch.
                                    </p>

                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-white font-bold transition-all text-sm uppercase tracking-wider"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
