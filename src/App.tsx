import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Zap, 
  Sparkles, 
  CreditCard, 
  Bot, 
  Radio, 
  ArrowRight, 
  ChevronRight,
  Menu,
  X,
  Globe,
  Layers,
  Smartphone
} from 'lucide-react';

const Logo = ({ className = "", showText = true, light = false }: { className?: string, showText?: boolean, light?: boolean }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <div className="relative flex items-center justify-center h-16 w-24">
      <span className={`text-7xl font-serif absolute left-0 leading-none transition-colors ${light ? 'text-navy' : 'text-white'}`} style={{ fontWeight: 400 }}>H</span>
      <span className={`text-7xl font-serif absolute right-0 leading-none transition-colors ${light ? 'text-navy' : 'text-white'}`} style={{ fontWeight: 400 }}>N</span>
      <div className={`absolute z-10 px-0.5 flex items-center justify-center ${light ? 'bg-white' : 'bg-zinc-950'}`}>
        <span className={`text-lg font-bold leading-none ${light ? 'text-navy' : 'text-blue-400'}`}>+</span>
      </div>
    </div>
    {showText && (
      <div className={`mt-4 text-[11px] font-sans font-bold tracking-[0.4em] uppercase whitespace-nowrap ${light ? 'text-navy' : 'text-zinc-300'}`}>
        The HN Plus
      </div>
    )}
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 glass' : 'py-4 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo className="scale-75 origin-left" showText={false} />
          <span className="text-lg font-bold font-display tracking-tight ml-2">
            The HN Plus
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#tech" className="hover:text-blue-400 transition-colors">Technology</a>
          <a href="#vision" className="hover:text-blue-400 transition-colors">Vision</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition-all">
            Contact Us
          </button>
        </div>

        <button className="md:hidden text-zinc-100" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#tech" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>Technology</a>
            <a href="#vision" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>Vision</a>
            <a href="#about" className="text-lg" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <button className="w-full py-3 bg-emerald-500 text-zinc-950 rounded-xl font-bold">Contact Us</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            The Future is Plug-in
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8">
            The HN <br />
            <span className="text-gradient">Plus+</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-lg mb-10 leading-relaxed">
            Bridging the gap between digital intelligence and physical reality. 
            A platform where infinite possibilities are seamlessly plugged in.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform group">
              Explore Innovation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-zinc-800 rounded-full font-bold text-lg hover:bg-white/5 transition-colors">
              Our Vision
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden relative group flex items-center justify-center">
            <div className="absolute inset-0 bg-navy/20 z-0" />
            <Logo className="scale-150 z-10" />
            <img 
              src="https://picsum.photos/seed/tech/1000/1000" 
              alt="Physical AI Innovation" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 right-10 glass p-4 rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">AI Agent</div>
                  <div className="text-sm font-bold">Active Protocol</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 left-10 glass p-4 rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                  <Cpu size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Physical AI</div>
                  <div className="text-sm font-bold">Hardware Sync: 99%</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, color }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 rounded-3xl glass group cursor-pointer"
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 ${color}`}>
      <Icon size={28} className="text-zinc-950" />
    </div>
    <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
    <p className="text-zinc-400 leading-relaxed">{description}</p>
    <div className="mt-6 flex items-center gap-2 text-blue-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
      Learn More <ChevronRight size={16} />
    </div>
  </motion.div>
);

const Technology = () => {
  const features = [
    {
      icon: Bot,
      title: "AI & AI Agents",
      description: "Autonomous intelligence systems designed to understand, reason, and act within complex digital and physical environments.",
      color: "bg-blue-400"
    },
    {
      icon: Cpu,
      title: "Physical AI",
      description: "Integrating advanced neural networks into hardware, enabling machines to perceive and interact with the physical world intelligently.",
      color: "bg-cyan-400"
    },
    {
      icon: Sparkles,
      title: "Cosmetic AI Innovation",
      description: "Next-generation beauty tech devices that personalize skincare and aesthetic treatments through real-time AI analysis.",
      color: "bg-pink-400"
    },
    {
      icon: CreditCard,
      title: "Next-Gen Payment",
      description: "Secure, decentralized, and AI-optimized transaction layers for the future economy of autonomous agents.",
      color: "bg-amber-400"
    },
    {
      icon: Radio,
      title: "Communication Core",
      description: "Proprietary low-latency communication protocols specifically engineered for Physical AI and swarm intelligence.",
      color: "bg-indigo-400"
    },
    {
      icon: Layers,
      title: "Plug-in Architecture",
      description: "A modular framework allowing any future technology to be seamlessly integrated into the HN Plus ecosystem.",
      color: "bg-rose-400"
    }
  ];

  return (
    <section id="tech" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Core Technologies</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            We are building the foundational layers of the future, where intelligence 
            is no longer confined to screens.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => <FeatureCard key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
};

const Vision = () => {
  return (
    <section id="vision" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img src="https://picsum.photos/seed/vision1/600/800" alt="Vision" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src="https://picsum.photos/seed/vision2/600/600" alt="Vision" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src="https://picsum.photos/seed/vision3/600/600" alt="Vision" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img src="https://picsum.photos/seed/vision4/600/800" alt="Vision" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">The "Plus" <br />Philosophy</h2>
          <div className="space-y-6 text-lg text-zinc-400">
            <p>
              The "HN" in our name represents the legacy and commitment of our founding shareholders. But the "Plus" is where our future lives.
            </p>
            <p>
              We believe that technology should be modular and extensible. Our architecture is designed to be a "plug-in" hub for future innovations, allowing us to pivot and expand as the frontier of AI moves forward.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-display font-bold text-zinc-100 mb-2">Infinite</div>
                <div className="text-sm uppercase tracking-widest font-bold text-blue-500">Scalability</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-zinc-100 mb-2">Seamless</div>
                <div className="text-sm uppercase tracking-widest font-bold text-blue-500">Integration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Logo className="scale-75 origin-left" />
            </div>
            <p className="text-zinc-500 max-w-sm leading-relaxed">
              Advancing the frontier of Physical AI and intelligent systems. 
              Building a world where digital and physical realities converge.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-zinc-300">Company</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Vision</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-zinc-300">Connect</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs">
            © 2026 The HN Plus. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-zinc-600">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Technology />
      <Vision />
      
      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto glass rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to plug in?</h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              Join us in shaping the next era of intelligence. We are looking for partners and visionaries to build the future together.
            </p>
            <button className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-xl hover:scale-105 transition-transform">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
