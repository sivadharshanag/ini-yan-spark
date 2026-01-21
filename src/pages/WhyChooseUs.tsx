import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  DollarSign,
  CheckCircle2,
  Wrench,
  HeartHandshake
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';

import heroConstruction1 from '@/assets/hero-construction-1.jpg';

const reasons = [
  {
    icon: Users,
    title: 'Experienced Workforce',
    description: 'Our team comprises skilled engineers, architects, and craftsmen with over 15 years of combined experience in delivering exceptional construction projects.',
  },
  {
    icon: Award,
    title: 'Quality Materials',
    description: 'We source only premium quality materials from certified suppliers, ensuring durability and longevity in every structure we build.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Costing',
    description: 'No hidden charges or surprise costs. We provide detailed quotations and maintain transparency throughout the project lifecycle.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We value your time. Our efficient project management ensures timely completion without compromising on quality.',
  },
  {
    icon: Shield,
    title: 'Safety Compliance',
    description: 'Strict adherence to safety protocols and regulatory compliance. We prioritize the safety of our workers and your property.',
  },
  {
    icon: HeartHandshake,
    title: 'Client Satisfaction',
    description: 'Your satisfaction is our priority. We work closely with you to ensure the final result exceeds your expectations.',
  },
  {
    icon: Wrench,
    title: 'After-Sales Support',
    description: 'Our relationship does not end at project completion. We provide comprehensive after-sales support and maintenance services.',
  },
  {
    icon: CheckCircle2,
    title: 'GST Registered',
    description: 'We are a government registered and verified business, providing you with authentic invoices and complete transparency.',
  },
];

const WhyChooseUs = () => {
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
              Why Choose Us
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Discover what makes INIYAN & Co your ideal construction partner
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle
            title="Building Trust Through Excellence"
            subtitle="Our commitment to quality, transparency, and customer satisfaction sets us apart in the construction industry."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border p-8 hover:border-primary transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <reason.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                
                <h3 className="font-display text-xl tracking-wide mb-4 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-charcoal py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="yellow-accent mx-auto mb-6" />
              <h2 className="section-title mb-6">
                Your <span className="text-gradient">Trusted Partner</span> in Construction
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                With over 150 successful projects and 500+ satisfied clients, we have 
                established ourselves as a reliable name in Tamil Nadu's construction industry.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border border-border p-6">
                  <div className="font-display text-4xl text-primary mb-2">150+</div>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div className="bg-card border border-border p-6">
                  <div className="font-display text-4xl text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
                <div className="bg-card border border-border p-6">
                  <div className="font-display text-4xl text-primary mb-2">15+</div>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </div>

              <div className="mt-10 p-6 bg-primary/10 border border-primary inline-flex items-center gap-4">
                <Shield className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <p className="font-display text-xl tracking-wide">Government Registered & Verified</p>
                  <p className="text-muted-foreground text-sm">GST Compliant Business</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyChooseUs;
