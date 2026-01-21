import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Homeowner, Chennai',
    content: 'INIYAN & Co built our dream home with exceptional quality. Their attention to detail and commitment to timelines was impressive. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Venkatesh',
    role: 'Business Owner, Coimbatore',
    content: 'Professional service from start to finish. They completed our commercial building ahead of schedule and within budget. Excellent team!',
    rating: 5,
  },
  {
    name: 'Suresh Iyer',
    role: 'Property Developer, Madurai',
    content: 'We have worked with INIYAN & Co on multiple projects. Their consistency in quality and transparent pricing makes them our preferred partner.',
    rating: 5,
  },
  {
    name: 'Lakshmi Narayanan',
    role: 'Homeowner, Trichy',
    content: 'The renovation of our ancestral home was handled with care and expertise. They preserved the heritage while modernizing the interiors beautifully.',
    rating: 5,
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-charcoal py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Hear from our satisfied clients about their experience working with us."
        />

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border p-8 md:p-12 text-center"
            >
              <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />
              
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-foreground/90">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <h4 className="font-display text-xl tracking-wide">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-muted-foreground">
                {testimonials[currentIndex].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-10 h-10 md:w-12 md:h-12 bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-10 h-10 md:w-12 md:h-12 bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
          </button>

          {/* Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-foreground/30 hover:bg-foreground/50'
                } rounded-full`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
