import ScrollAnimation from '../../components/ui/ScrollAnimation';
import SectionTitle from '../../components/ui/SectionTitle';
import CallToAction from '../../components/ui/CallToAction';

const ResearchInitiatives = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-purple-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation type="fadeIn">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              More Research Initiatives
            </h1>
          </ScrollAnimation>
          <ScrollAnimation type="fadeIn" delay={200}>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Explore our cutting-edge research projects pushing the boundaries of AI technology.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Research Projects Section */}
      <section className="section bg-white">
        <div className="container">
          <ScrollAnimation type="slideUp">
            <SectionTitle
              subtitle="PROJECTS"
              title="Cutting-Edge Research Initiatives"
              description="Our research teams work on groundbreaking projects that push the boundaries of AI applications in various domains."
            />
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 mt-12">
            <ScrollAnimation type="slideUp" delay={100}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/5 mb-4 md:mb-0">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg" 
                      alt="AI for Space Science" 
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-semibold mb-3">AI for Science</h3>
                  <p className="text-[#6e6e73] mb-4">
                    Our AI for Space Science initiative applies advanced machine learning algorithms to satellite data, improving space weather forecasting and geophysical modeling.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Satellite Data', 'Neural Networks', 'Geophysical Modeling', 'Space Weather'].map((tag, index) => (
                      <span key={index} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation type="slideUp" delay={200}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/5 mb-4 md:mb-0">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg" 
                      alt="Computer Vision" 
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-semibold mb-3">Computer Vision Research</h3>
                  <p className="text-[#6e6e73] mb-4">
                    Our Computer Vision team develops cutting-edge AI models for object detection, image classification, and advanced vision-based automation systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Object Detection', 'Image Classification', 'Computer Vision', 'Deep Learning'].map((tag, index) => (
                      <span key={index} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation type="slideUp" delay={300}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/5 mb-4 md:mb-0">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg" 
                      alt="Demography Studies" 
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-semibold mb-3">Demography and Development Studies</h3>
                  <p className="text-[#6e6e73] mb-4">
                    Analyzing and visualizing fertility rate histories across different countries, identifying trends and correlations with socioeconomic factors.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Data Visualization', 'Demographic Analysis', 'Time Series', 'Statistical Modeling'].map((tag, index) => (
                      <span key={index} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation type="slideUp" delay={400}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/5 mb-4 md:mb-0">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg" 
                      alt="Geospatial Analytics" 
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-semibold mb-3">Geospatial Analytics</h3>
                  <p className="text-[#6e6e73] mb-4">
                    Developing AI models for analyzing geographical data, enabling advanced mapping, location intelligence, and spatial pattern recognition.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['GIS', 'Spatial Analysis', 'Location Intelligence', 'Mapping'].map((tag, index) => (
                      <span key={index} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction 
        title="Interested in Our Research?"
        description="Learn more about our research initiatives or explore collaboration opportunities."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
      />
    </>
  );
};

export default ResearchInitiatives;