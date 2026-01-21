import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';

import heroConstruction1 from '@/assets/hero-construction-1.jpg';
import heroResidential3 from '@/assets/hero-residential-3.jpg';
import heroCommercial2 from '@/assets/hero-commercial-2.jpg';
import serviceRenovation from '@/assets/service-renovation.jpg';
import serviceConsultancy from '@/assets/service-consultancy.jpg';

const services = [
  {
    id: 'residential',
    title: 'Residential Building Construction',
    description: `Our residential construction services encompass the complete lifecycle of home building, from initial design concepts to final handover. We specialize in constructing individual houses, apartments, villas, and multi-family residential complexes.

Our experienced team works closely with you to understand your vision, preferences, and budget constraints. We use only premium quality materials sourced from trusted suppliers, ensuring your home stands strong for generations.`,
    features: [
      'Custom home design and construction',
      'Apartment and villa development',
      'Foundation to finishing services',
      'Interior and exterior works',
      'Landscaping and outdoor spaces',
    ],
    image: heroResidential3,
  },
  {
    id: 'commercial',
    title: 'Commercial & Industrial Construction',
    description: `We deliver world-class commercial and industrial construction solutions that meet the highest standards of quality and functionality. Our portfolio includes office buildings, retail spaces, warehouses, factories, and industrial facilities.

Our team understands the unique requirements of commercial projects, including compliance with regulations, optimizing space utilization, and ensuring operational efficiency.`,
    features: [
      'Office buildings and corporate spaces',
      'Retail outlets and shopping complexes',
      'Warehouses and storage facilities',
      'Factory and industrial buildings',
      'Institutional buildings',
    ],
    image: heroCommercial2,
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    description: `Transform your existing space into something extraordinary with our comprehensive renovation and remodeling services. Whether you want to modernize an older property, expand your living space, or completely redesign your interiors, we have the expertise to deliver.

Our renovation projects respect the original character of your property while incorporating modern amenities and design elements.`,
    features: [
      'Kitchen and bathroom remodeling',
      'Room additions and extensions',
      'Structural modifications',
      'Interior redesign',
      'Facade and exterior upgrades',
    ],
    image: serviceRenovation,
  },
  {
    id: 'consultancy',
    title: 'Construction Consultancy',
    description: `Our expert consultancy services guide you through every phase of your construction project. From feasibility studies to project completion, we provide valuable insights that save time, money, and ensure compliance with all regulations.

Our consultants bring decades of combined experience in construction management, helping you make informed decisions.`,
    features: [
      'Project feasibility analysis',
      'Cost estimation and budgeting',
      'Regulatory compliance guidance',
      'Vendor and material selection',
      'Quality assurance planning',
    ],
    image: serviceConsultancy,
  },
  {
    id: 'supervision',
    title: 'Site Supervision & Project Management',
    description: `Ensure your project stays on track with our professional site supervision and project management services. Our experienced supervisors monitor every aspect of construction, from material quality to worker safety.

We implement rigorous quality control measures and maintain detailed progress reports to keep you informed at every stage.`,
    features: [
      'Daily site monitoring',
      'Quality control and assurance',
      'Safety compliance management',
      'Progress tracking and reporting',
      'Coordination with contractors',
    ],
    image: heroConstruction1,
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section 
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroConstruction1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="yellow-accent mx-auto mb-6" />
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider">
              Our Services
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to meet your specific needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-28 last:mb-0 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`img-zoom ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="yellow-accent mb-6" />
                <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-6">
                  {service.title}
                </h2>
                <div className="text-muted-foreground leading-relaxed mb-8 space-y-4">
                  {service.description.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary flex-shrink-0" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
                >
                  Get a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-charcoal py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-6">
              Ready to Start Your <span className="text-gradient">Project</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and let our experts help you 
              bring your vision to life.
            </p>
            <Link to="/contact" className="btn-hero-primary">
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
