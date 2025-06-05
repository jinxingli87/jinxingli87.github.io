import { ChevronRight, Play } from 'lucide-react';
import ScrollAnimation from '../../components/ui/ScrollAnimation';
import SectionTitle from '../../components/ui/SectionTitle';
import CallToAction from '../../components/ui/CallToAction';

const SpaceScience = () => {
  const spaceResearchExamples = [
    {
      title: "Sunspot Numbers",
      image: "/images/sunspots.png",
      description: "Active and quiet periods of solar activities identified by sunspot numbers."
    },
    {
      title: "High-energy Particle in Space",
      image: "/images/rbsp_rept_flux_2015.png",
      description: "Evolution of high-energy particles vesus altitude and time."
    },
    {
      title: "Spacecraft Orbit",
      image: "/images/themis_orbit.jpg",
      description: "Analysis temporal and spatial information of spacecraft."
    },
    {
      title: "The Sound in Space",
      type: "video",
      src: "/images/movie_chorus.mp4",
      description: "Studying waves in space captured by spacecraft, converting the signals into audio and video, and analyzing the characteristics of those waves. Investigating how waves heat particles like microwave oven, and how they knock out particles to the atmosphere, forming the stunning aurora."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-purple-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation type="fadeIn">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Space Science Research
            </h1>
          </ScrollAnimation>
          <ScrollAnimation type="fadeIn" delay={200}>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Explore the mysteries of space through data analysis and visualization
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          <ScrollAnimation type="slideUp">
            <SectionTitle
              subtitle="RESEARCH PROGRAM"
              title="Space Science Research"
              description="A comprehensive program exploring space physics through data analysis and visualization"
            />
            
            <div className="mt-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Program Overview</h3>
                  <p className="text-gray-600 mb-6">
                    Our space science research program introduces students to the fascinating world of space physics through hands-on data analysis. Students work with real NASA spacecraft data to explore the space environment and understand fundamental space phenomena.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Topics Covered</h3>
                  <ul className="space-y-3">
                    {[
                      'Understanding the Sun-Earth relationship and space weather',
                      'Analysis of solar activity and its effects on Earth',
                      'Exploration of the Earth\'s magnetosphere',
                      'Study of high-energy particles in space',
                      'Investigation of space waves and aurora formation',
                      'Spacecraft data analysis and visualization techniques'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Research Methods</h3>
                  <ul className="space-y-3">
                    {[
                      'Working with real NASA mission data',
                      'Using Python for data analysis and visualization',
                      'Creating interactive visualizations of space phenomena',
                      'Applying statistical analysis to space physics data',
                      'Developing research presentation skills'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <div className="mt-16">
            <ScrollAnimation type="slideUp">
              <h2 className="text-2xl font-semibold mb-8">Research Examples & Visualizations</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {spaceResearchExamples.map((example, index) => (
                  <ScrollAnimation key={index} type="slideUp" delay={index * 100}>
                    <div className="card overflow-hidden bg-gray-50 hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-w-16 aspect-h-9 relative">
                        {example.type === 'video' ? (
                          <video
                            className="w-full h-full object-cover"
                            controls
                            preload="metadata"
                            playsInline
                          >
                            <source src={example.src} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img 
                            src={example.image} 
                            alt={example.title} 
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                          />
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{example.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{example.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction 
        title="Ready to Explore Space Science?"
        description="Join our research program and discover the fascinating world of space physics through data analysis."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/services"
      />
    </>
  );
};

export default SpaceScience;