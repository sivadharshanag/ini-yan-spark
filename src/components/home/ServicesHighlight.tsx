import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Building, 
  Hammer, 
  FileText, 
  HardHat,
  ArrowRight 
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'Custom homes, apartments, and villas built with quality materials and modern designs.',
    link: '/services#residential',
  },
  {
    icon: Building,
    title: 'Commercial Construction',
    description: 'Office buildings, retail spaces, and industrial facilities with professional execution.',
    link: '/services#commercial',
  },
  {
    icon: Hammer,
    title: 'Renovation & Remodeling',
    description: 'Transform existing spaces with our expert renovation and remodeling services.',
    link: '/services#renovation',
  },
  {
    icon: FileText,
    title: 'Construction Consultancy',
    description: 'Expert guidance on project planning, cost estimation, and regulatory compliance.',
    link: '/services#consultancy',
  },
  {
    icon: HardHat,
    title: 'Site Supervision',
    description: 'Professional on-site supervision ensuring quality and safety standards.',
    link: '/services#supervision',
  },
];

const ServicesHighlight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-dark py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive construction solutions tailored to meet your specific needs with precision and excellence."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="card-service block p-8 h-full group"
              >
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                
                <h3 className="font-display text-2xl tracking-wide mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
