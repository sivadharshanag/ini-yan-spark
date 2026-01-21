import Layout from '@/components/layout/Layout';
import HeroSlider from '@/components/home/HeroSlider';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesHighlight from '@/components/home/ServicesHighlight';
import WhyChooseUsPreview from '@/components/home/WhyChooseUsPreview';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <AboutPreview />
      <ServicesHighlight />
      <WhyChooseUsPreview />
      <TestimonialsSlider />
      <CTASection />
    </Layout>
  );
};

export default Index;
