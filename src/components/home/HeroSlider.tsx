import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import heroConstruction1 from '@/assets/hero-construction-1.jpg';
import heroCommercial2 from '@/assets/hero-commercial-2.jpg';
import heroResidential3 from '@/assets/hero-residential-3.jpg';

const slides = [
  {
    image: heroConstruction1,
    title: 'Building Trust.',
    subtitle: 'Creating Strong Foundations.',
    description: 'Residential | Commercial | Renovation | Construction Consultancy',
  },
  {
    image: heroCommercial2,
    title: 'Commercial Excellence.',
    subtitle: 'Modern Architecture.',
    description: 'Premium Commercial & Industrial Construction Solutions',
  },
  {
    image: heroResidential3,
    title: 'Dream Homes.',
    subtitle: 'Built to Perfection.',
    description: 'Quality Residential Construction Across Tamil Nadu',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="parallax-overlay" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center z-10">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="yellow-accent mx-auto mb-8" />
                </motion.div>

                <motion.h1
                  className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider mb-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.h2
                  className="font-display text-4xl md:text-6xl lg:text-7xl tracking-wider text-gradient mb-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>

                <motion.p
                  className="text-lg md:text-xl text-foreground/80 tracking-wide mb-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <Link to="/projects" className="btn-hero-primary">
                    View Our Projects
                  </Link>
                  <Link to="/contact" className="btn-hero-secondary">
                    Get Free Consultation
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-background/20 backdrop-blur-sm border border-foreground/20 hover:bg-primary hover:border-primary transition-all group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 group-hover:text-primary-foreground transition-colors" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-background/20 backdrop-blur-sm border border-foreground/20 hover:bg-primary hover:border-primary transition-all group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 group-hover:text-primary-foreground transition-colors" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`h-1 transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-primary'
                : 'w-6 bg-foreground/30 hover:bg-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 right-8 z-20 hidden md:flex flex-col items-center gap-2 text-foreground/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="text-xs tracking-widest rotate-90 origin-center translate-y-4">
          SCROLL
        </span>
        <div className="w-px h-12 bg-foreground/30 mt-8" />
      </motion.div>
    </section>
  );
};

export default HeroSlider;
