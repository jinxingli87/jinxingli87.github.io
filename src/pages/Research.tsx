import { BookOpen, PenTool, ChevronRight, Database, LineChart, MapPin } from 'lucide-react';
import ScrollAnimation from '../components/ui/ScrollAnimation';
import SectionTitle from '../components/ui/SectionTitle';
import CallToAction from '../components/ui/CallToAction';

const Research = () => {
  const analysisExamples = [
    {
      title: "Temperature Trends Visualization",
      image: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg",
      description: "Students analyze and visualize temperature trends across 100 years, identifying patterns and anomalies."
    },
    {
      title: "Housing Price Evolution",
      image: "https://images.pexels.com/photos/186078/pexels-photo-186078.jpeg",
      description: "Interactive dashboards comparing housing price trends across different countries and regions."
    },
    {
      title: "Population Demographics",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
      description: "Analysis of population demographics and their changes over time using advanced visualization techniques."
    },
    {
      title: "Economic Indicators",
      image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg",
      description: "Tracking and visualizing key economic indicators and their relationships using Python tools."
    },
    {
      title: "Environmental Data Analysis",
      image: "https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg",
      description: "Environmental data visualization showing pollution levels and climate change impacts."
    },
    {
      title: "Healthcare Statistics",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
      description: "Analysis of healthcare data to identify trends and patterns in patient care and outcomes."
    },
    {
      title: "Education Metrics",
      image: "https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg",
      description: "Visualizing educational performance metrics and learning outcomes across different regions."
    },
    {
      title: "Transportation Analysis",
      image: "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg",
      description: "Analysis of transportation patterns and traffic flow using data visualization techniques."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation type="fadeIn">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Research & Education
            </h1>
          </ScrollAnimation>
          <ScrollAnimation type="fadeIn" delay={200}>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Explore our AI-driven research initiatives and educational programs designed to advance knowledge and foster innovation.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Data Analysis with Python Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 items-start">
            <ScrollAnimation type="slideUp">
              <div>
                <SectionTitle
                  subtitle="EDUCATION"
                  title="Data Analysis with Python"
                  description="A comprehensive program teaching data visualization and analysis with essential Python tools and libraries."
                />
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3">Program Highlights:</h3>
                  <ul className="space-y-3">
                    {[
                      'Fundamentals of NumPy, Pandas, and Matplotlib',
                      'Advanced visualization techniques with Plotly',
                      'Time series analysis with Datetime',
                      'Data cleaning and transformation workflows',
                      'Real-world case studies and projects'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation type="slideUp" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {analysisExamples.map((example, index) => (
                  <div key={index} className="card overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                      <img 
                        src={example.image} 
                        alt={example.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-base font-medium mb-1">{example.title}</h4>
                      <p className="text-sm text-[#6e6e73]">{example.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* AI Tools in Research Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <ScrollAnimation type="slideUp">
            <SectionTitle
              subtitle="TRAINING"
              title="AI Tools in Research"
              description="Learn how to effectively leverage modern AI tools to enhance research workflows and accelerate scientific discovery."
              centered
            />
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ScrollAnimation type="slideUp" delay={100}>
              <div className="card p-6 h-full flex flex-col">
                <div className="mb-4 text-primary-600">
                  <PenTool size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Large Language Models</h3>
                <p className="text-gray-600 mb-4">
                  Harness the power of ChatGPT, Claude, and other LLMs for data sourcing, literature review, and research planning.
                </p>
                <ul className="space-y-2 mt-auto text-sm text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={14} />
                    <span>Research question formulation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={14} />
                    <span>Systematic literature exploration</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={14} />
                    <span>Content summarization and analysis</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation type="slideUp" delay={200}>
              <div className="card p-6 h-full flex flex-col">
                <div className="mb-4 text-primary-600">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Programming Tools</h3>
                <p className="text-gray-600 mb-4">
                  Master AI-enhanced programming environments like VS Code, Cursor, and GitHub Copilot to accelerate development.
                </p>
                <ul className="space-y-2 mt-auto text-sm text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={14} />
                    <span>Code generation and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={14} />
                    <span>Error debugging assistance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={14} />
                    <span>Documentation automation</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation type="slideUp" delay={300}>
              <div className="card p-6 h-full flex flex-col">
                <div className="mb-4 text-primary-600">
                  <LineChart size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reproducibility Practices</h3>
                <p className="text-gray-600 mb-4">
                  Learn best practices for ensuring reproducibility and transparency in AI-enhanced research workflows.
                </p>
                <ul className="space-y-2 mt-auto text-sm text-gray-600">
                  <li className="flex items-start">
                    <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={14} />
                    <span>Version control methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={14} />
                    <span>Data provenance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={14} />
                    <span>Open science principles</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
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
                      src="https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="AI for Space Science" 
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-semibold mb-3">AI for Space Science</h3>
                  <p className="text-gray-600 mb-4">
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
                      src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Computer Vision" 
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-semibold mb-3">Computer Vision Research</h3>
                  <p className="text-gray-600 mb-4">
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
                      src="https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Fertility Rate Analysis" 
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-semibold mb-3">Fertility Rate Studies</h3>
                  <p className="text-gray-600 mb-4">
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
                      src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Geospatial Analytics" 
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-semibold mb-3">Geospatial Analytics</h3>
                  <p className="text-gray-600 mb-4">
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
        title="Interested in Our Research Programs?"
        description="Contact us to learn more about our research initiatives, educational programs, or collaboration opportunities."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
      />
    </>
  );
};

export default Research;