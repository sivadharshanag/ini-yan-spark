import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import AnimatedCounter from '../ui/AnimatedCounter';

const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 150, suffix: '+', label: 'Projects Completed' },
    { value: 15, suffix: '+', label: 'Years Experience' },
    { value: 500, suffix: '+', label: 'Happy Clients' },
    { value: 50, suffix: '+', label: 'Skilled Workforce' },
  ];

  return (
    <section className="section-charcoal py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="yellow-accent mb-6" />
            <h2 className="section-title mb-6">
              About <span className="text-gradient">INIYAN & Co</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              INIYAN & Co is a trusted construction and consultancy firm delivering 
              quality-driven residential and commercial projects with transparency, 
              safety, and precision. Based in Tamil Nadu, we have been transforming 
              visions into reality for over 15 years.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of experienced engineers and skilled craftsmen are committed 
              to delivering projects on time and within budget, while maintaining the 
              highest standards of quality and safety. We take pride in our transparent 
              pricing and customer-centric approach.
            </p>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 border border-primary text-primary font-medium text-sm">
                GST REGISTERED
              </div>
              <div className="px-4 py-2 bg-primary text-primary-foreground font-medium text-sm">
                SINCE 2009
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card border border-border p-6 md:p-8 transition-all duration-300 hover:border-primary"
              >
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
