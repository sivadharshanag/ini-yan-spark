import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  DollarSign,
  CheckCircle2 
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

import heroConstruction1 from '@/assets/hero-construction-1.jpg';

const reasons = [
  {
    icon: Award,
    title: 'Quality Materials',
    description: 'Only the finest materials from trusted suppliers.',
  },
  {
    icon: Users,
    title: 'Experienced Engineers',
    description: '15+ years of professional expertise.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden costs, clear quotations.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Projects completed on schedule.',
  },
  {
    icon: Shield,
    title: 'GST Registered',
    description: 'Government verified business.',
  },
  {
    icon: CheckCircle2,
    title: 'Safety Compliance',
    description: 'Strict adherence to safety standards.',
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      className="relative py-20 md:py-28 bg-fixed bg-cover bg-center" 
      style={{ backgroundImage: `url(${heroConstruction1})` }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionTitle
          title="Why Choose Us"
          subtitle="We bring together experience, quality, and trust to deliver exceptional construction services."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/80 backdrop-blur-sm border border-border p-8 text-center hover:border-primary transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <reason.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              
              <h3 className="font-display text-xl tracking-wide mb-3 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
