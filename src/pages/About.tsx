import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Building2, Award, Users, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

import heroConstruction1 from '@/assets/hero-construction-1.jpg';
import serviceConsultancy from '@/assets/service-consultancy.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 150, suffix: '+', label: 'Projects Completed' },
    { value: 15, suffix: '+', label: 'Years Experience' },
    { value: 500, suffix: '+', label: 'Happy Clients' },
    { value: 50, suffix: '+', label: 'Skilled Workforce' },
  ];

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
              About Us
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-dark py-20 md:py-28" ref={ref}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="yellow-accent mb-6" />
              <h2 className="section-title mb-6">
                Building Excellence <span className="text-gradient">Since 2009</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                INIYAN & Co is a professionally managed construction and consultancy 
                firm committed to delivering durable, cost-effective, and high-quality 
                construction solutions. Based in Tamil Nadu, India, we have established 
                ourselves as a trusted name in the construction industry.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our journey began with a simple vision: to build structures that stand 
                the test of time while exceeding client expectations. Today, we continue 
                to uphold this vision through our commitment to quality, transparency, 
                and customer satisfaction.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="px-4 py-2 border border-primary text-primary font-medium text-sm flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  GST REGISTERED
                </div>
                <div className="px-4 py-2 bg-primary text-primary-foreground font-medium text-sm">
                  PROPRIETORSHIP FIRM
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="img-zoom">
                <img 
                  src={serviceConsultancy} 
                  alt="INIYAN & Co Team" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 md:p-8">
                <div className="text-primary-foreground">
                  <span className="font-display text-4xl md:text-5xl">15+</span>
                  <p className="text-sm font-medium mt-1">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-charcoal py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Vision & Mission"
            subtitle="Our guiding principles that drive us towards excellence every day."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border p-8 md:p-10 hover:border-primary transition-colors"
            >
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-3xl tracking-wide mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a trusted construction partner known for integrity and excellence, 
                setting new benchmarks in quality construction across Tamil Nadu and beyond. 
                We aspire to build lasting relationships with our clients through transparent 
                practices and exceptional service delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border p-8 md:p-10 hover:border-primary transition-colors"
            >
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-3xl tracking-wide mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver quality construction with customer satisfaction and transparency 
                at its core. We are committed to using the finest materials, employing skilled 
                craftsmen, and adhering to strict timelines while maintaining competitive pricing 
                that provides value to our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border p-6 md:p-8 text-center hover:border-primary transition-colors"
              >
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proprietor Details */}
      <section className="section-charcoal py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Company Details"
            subtitle="Registered and verified business information."
          />

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                    Company Name
                  </h4>
                  <p className="font-display text-2xl">INIYAN & Co</p>
                </div>
                <div>
                  <h4 className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                    Business Type
                  </h4>
                  <p className="font-display text-2xl">Proprietorship</p>
                </div>
                <div>
                  <h4 className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                    Proprietor
                  </h4>
                  <p className="font-display text-2xl">Mr. Iniyan</p>
                </div>
                <div>
                  <h4 className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                    Location
                  </h4>
                  <p className="font-display text-2xl">Tamil Nadu, India</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary">
                    <Award className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">GST Registration</p>
                      <p className="font-medium text-primary">33XXXXX1234X1ZX</p>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-primary text-primary-foreground font-medium">
                    ✓ Government Registered & Verified
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
