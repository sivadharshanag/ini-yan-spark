import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

import heroConstruction1 from '@/assets/hero-construction-1.jpg';
import heroCommercial2 from '@/assets/hero-commercial-2.jpg';
import heroResidential3 from '@/assets/hero-residential-3.jpg';
import projectResidential1 from '@/assets/project-residential-1.jpg';
import projectCommercial1 from '@/assets/project-commercial-1.jpg';
import projectVilla1 from '@/assets/project-villa-1.jpg';
import projectIndustrial1 from '@/assets/project-industrial-1.jpg';

const projects = [
  {
    id: 1,
    title: 'Sunrise Apartments',
    location: 'Chennai, Tamil Nadu',
    category: 'residential',
    status: 'completed',
    images: [projectResidential1, heroResidential3],
    description: 'A premium 8-floor residential complex with 64 modern apartments.',
  },
  {
    id: 2,
    title: 'Metro Business Park',
    location: 'Coimbatore, Tamil Nadu',
    category: 'commercial',
    status: 'completed',
    images: [heroCommercial2, projectCommercial1],
    description: 'State-of-the-art commercial complex with retail and office spaces.',
  },
  {
    id: 3,
    title: 'Lakeside Villa',
    location: 'Ooty, Tamil Nadu',
    category: 'residential',
    status: 'completed',
    images: [projectVilla1, heroResidential3],
    description: 'Luxury villa with pool and landscaped gardens.',
  },
  {
    id: 4,
    title: 'Industrial Warehouse',
    location: 'Madurai, Tamil Nadu',
    category: 'commercial',
    status: 'completed',
    images: [projectIndustrial1, heroConstruction1],
    description: 'Large-scale warehouse facility for logistics operations.',
  },
  {
    id: 5,
    title: 'Green Valley Homes',
    location: 'Trichy, Tamil Nadu',
    category: 'residential',
    status: 'ongoing',
    images: [heroResidential3, projectResidential1],
    description: 'Eco-friendly residential community with 50 individual homes.',
  },
  {
    id: 6,
    title: 'Tech Hub Tower',
    location: 'Chennai, Tamil Nadu',
    category: 'commercial',
    status: 'ongoing',
    images: [projectCommercial1, heroCommercial2],
    description: 'Modern IT park with smart building features.',
  },
];

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'ongoing', label: 'Ongoing' },
  { id: 'completed', label: 'Completed' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ongoing' || activeFilter === 'completed') {
      return project.status === activeFilter;
    }
    return project.category === activeFilter;
  });

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

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
              Our Projects
            </h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Explore our portfolio of completed and ongoing construction projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 font-medium tracking-wide transition-all ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-foreground hover:border-primary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <div className="relative overflow-hidden bg-card border border-border hover:border-primary transition-all">
                    <div className="img-zoom aspect-[4/3]">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-display text-2xl tracking-wide mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <span className="px-3 py-1 text-xs uppercase tracking-wider bg-primary/20 text-primary">
                            {project.category}
                          </span>
                          <span className={`px-3 py-1 text-xs uppercase tracking-wider ${
                            project.status === 'completed' 
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 text-xs uppercase tracking-wider ${
                      project.status === 'completed' 
                        ? 'bg-green-500/90 text-green-950'
                        : 'bg-yellow-500/90 text-yellow-950'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-card border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image Slider */}
              <div className="relative aspect-video">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'w-6 bg-primary' : 'w-2 bg-foreground/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{selectedProject.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-4 py-2 text-sm uppercase tracking-wider bg-primary/20 text-primary">
                      {selectedProject.category}
                    </span>
                    <span className={`px-4 py-2 text-sm uppercase tracking-wider ${
                      selectedProject.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Projects;
