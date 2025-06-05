import { Link } from 'react-router-dom';
import { Lightbulb, BookOpen, BarChart3, Brain, Globe, Rocket } from 'lucide-react';
import ScrollAnimation from '../components/ui/ScrollAnimation';
import SectionTitle from '../components/ui/SectionTitle';
import FeatureCard from '../components/ui/FeatureCard';
import CallToAction from '../components/ui/CallToAction';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-purple-950 to-black z-0"></div>
        <div 
          className="absolute inset-0 bg-black opacity-40 z-10"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply'
          }}
        ></div>
        <div className="container relative z-20 px-4">
          <ScrollAnimation type="fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
              Empowering the Future Through Research & Education with AI
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation type="fadeIn" delay={200}>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              At ResAI, we're dedicated to mentoring the next generation of innovators.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation type="fadeIn" delay={400}>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link to="/research/initiatives" className="btn-secondary">
                Explore Research
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Research Programs Section */}
      <section className="section bg-white">
        <div className="container">
          <ScrollAnimation type="slideUp">
            <SectionTitle
              subtitle="RESEARCH PROGRAMS"
              title="Comprehensive Learning Paths"
              description="From foundational data analysis to advanced machine learning, our programs cater to various skill levels and interests."
              centered
            />
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ScrollAnimation type="slideUp" delay={100}>
              <Link to="/research/data-analysis" className="block h-full">
                <FeatureCard
                  icon={<BarChart3 size={24} />}
                  title="Data Analysis"
                  description="Master data visualization and analysis using Python's powerful ecosystem of tools."
                  className="h-full hover:shadow-lg transition-shadow"
                />
              </Link>
            </ScrollAnimation>
            
            <ScrollAnimation type="slideUp" delay={200}>
              <Link to="/research/space-science" className="block h-full">
                <FeatureCard
                  icon={<Rocket size={24} />}
                  title="Space Science"
                  description="Explore space physics through hands-on analysis of NASA spacecraft data."
                  className="h-full hover:shadow-lg transition-shadow"
                />
              </Link>
            </ScrollAnimation>
            
            <ScrollAnimation type="slideUp" delay={300}>
              <Link to="/research/machine-learning" className="block h-full">
                <FeatureCard
                  icon={<Brain size={24} />}
                  title="Machine Learning"
                  description="Learn advanced AI techniques and their applications in scientific research."
                  className="h-full hover:shadow-lg transition-shadow"
                />
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* Featured Research Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <ScrollAnimation type="slideUp">
            <SectionTitle
              subtitle="FEATURED RESEARCH"
              title="Cutting-Edge Projects"
              description="Our research teams work on innovative projects across multiple domains."
            />
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ScrollAnimation type="slideUp" delay={100}>
              <div className="card overflow-hidden h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Space Science Research" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">Space Science Research</h3>
                  <p className="text-gray-600 mb-4">
                    Analyzing spacecraft data to understand space weather and its effects on Earth's environment.
                  </p>
                  <Link to="/research/space-science" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                    Learn more
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation type="slideUp" delay={200}>
              <div className="card overflow-hidden h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Machine Learning Applications" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
                  <p className="text-gray-600 mb-4">
                    Developing advanced AI models for scientific research and real-world applications.
                  </p>
                  <Link to="/research/machine-learning" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                    Learn more
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container">
          <ScrollAnimation type="slideUp">
            <SectionTitle
              subtitle="OUR SERVICES"
              title="Comprehensive Solutions"
              description="We provide expert guidance and support across multiple areas of AI research and education."
              centered
            />
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScrollAnimation type="slideUp" delay={100}>
              <Link to="/services" className="block h-full">
                <FeatureCard
                  icon={<Brain size={24} />}
                  title="AI Research"
                  description="Expert guidance on implementing AI tools in research workflows and enabling breakthrough discoveries."
                  className="h-full hover:shadow-lg transition-shadow"
                />
              </Link>
            </ScrollAnimation>
            
            <ScrollAnimation type="slideUp" delay={200}>
              <Link to="/services" className="block h-full">
                <FeatureCard
                  icon={<BookOpen size={24} />}
                  title="Education"
                  description="Comprehensive programs teaching data analysis, AI tools, and practical research skills."
                  className="h-full hover:shadow-lg transition-shadow"
                />
              </Link>
            </ScrollAnimation>
            
            <ScrollAnimation type="slideUp" delay={300}>
              <Link to="/services" className="block h-full">
                <FeatureCard
                  icon={<Globe size={24} />}
                  title="Consulting"
                  description="Strategic AI consulting helping organizations implement cutting-edge solutions."
                  className="h-full hover:shadow-lg transition-shadow"
                />
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction 
        title="Ready to Start Your AI Journey?"
        description="Join our programs to master AI technologies and contribute to groundbreaking research."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Programs"
        secondaryButtonLink="/research/initiatives"
      />
    </>
  );
};

export default Home;