import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import heroCommercial2 from '@/assets/hero-commercial-2.jpg';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      className="relative py-24 md:py-32 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${heroCommercial2})` }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="yellow-accent mb-6" />
          <h2 className="section-title mb-6">
            Let's Build Your <span className="text-gradient">Dream Project</span> Together
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Ready to start your construction journey? Contact us today for a free 
            consultation and let our experts guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-hero-primary">
              Contact Us Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/projects" className="btn-hero-secondary">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
