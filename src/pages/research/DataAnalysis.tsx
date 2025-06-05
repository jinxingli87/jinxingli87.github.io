import { ChevronRight } from 'lucide-react';
import ScrollAnimation from '../../components/ui/ScrollAnimation';
import SectionTitle from '../../components/ui/SectionTitle';
import CallToAction from '../../components/ui/CallToAction';

const DataAnalysis = () => {
  const analysisExamples = [
    {
      title: "Weather, Climate & Environment Analysis",
      image: "/images/nyc_temp.png",
      description: "Analysis regional temperature trends across 100 years, identifying features and trends."
    },
    {
      title: "Real Estate Analysis",
      image: "/images/median_prices_california.png",
      description: "Interactive dashboards analyzing housing price trends and market information across different regions."
    },
    {
      title: "Trading Data Analysis",
      image: "/images/aapl_price_volume2.png",
      description: "Analysis of stock price, trading volume and key information using interactive visualization techniques."
    },
    {
      title: "Exploring the Secrets of Exoplanets",
      image: "/images/exoplanet_mass_radius_temp.png",
      description: "Explore relations between size, mass and temperature of exoplanets."
    },
    {
      title: "Policy Analysis and Business Decision Making",
      image: "/images/combined_tax_rate_2025.png",
      description: "Louisiana, Tennessee, Arkansas, and Alabama are among the highest tax rate states, while Delaware, Montana, New Hampshire, and Oregon are no state sales tax policies."
    },
    {
      title: "Expenditures on Education, Healthcare, R&Ds global wide",
      image: "/images/education_expenditure_gdp.png",
      description: "Visualizing expenditure across different regions and variations over years."
    },
    {
      title: "Demography, Sociology and Development Studies",
      image: "/images/total_fertility_rate_over_time.png",
      description: "Example: Studies of fertility rate changes over history in selected countries."
    },
    {
      title: "Astronomy & Physics",
      image: "/images/movie_3.gif",
      description: "Example: Analyzing celestial object orbit and spacecraft orbit and visulizing with videos."
    }
  ];

  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-purple-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation type="fadeIn">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Data Analysis with Python
            </h1>
          </ScrollAnimation>
          <ScrollAnimation type="fadeIn" delay={200}>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Learn most practical data analysis and visualization techniques using Python's powerful ecosystem of tools.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 items-start">
            <ScrollAnimation type="slideUp">
              <div>
                <SectionTitle
                  subtitle="Research Program"
                  title="Data Analysis in Research"
                  description="Designed for high school students and above interested in research, covering the following contents."
                />
                
                <div className="mt-8">
                  <div className="space-y-6">
                    {[
                      {
                        title: 'Using AI tools for data acquisition, programming, and reasoning',
                        items: [
                          'LLMs such as ChatGPT, Deepseek',
                          'VS Code, Cursor, GitHub Copilot, etc.'
                        ]
                      },
                      {
                        title: 'Data analysis and visualization with Python',
                        items: [
                          'Data operations with Numpy and Pandas',
                          'Data visualization with Matplotlib: 1-D plot, 2-D plot',
                          'Handling date and time',
                          'Data examples: Economics (GDP), Finance (stocks), Social Science (education, COVID), Business (real estate), Astronomy (exoplanets), Geophysics (city temperature), Environment (air quality)'
                        ]
                      },
                      {
                        title: 'Data science',
                        items: [
                          'Linear regression and applications in science',
                          'Correlation analysis'
                        ]
                      },
                      {
                        title: 'Building personal websites to showcase research results',
                        items: [
                          'Google Sites',
                          'AI website tools such as bolt.new'
                        ]
                      }
                    ].map((section, idx) => (
                      <div key={idx}>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{section.title}</h3>
                        <ul className="space-y-2 pl-1">
                          {section.items.map((item, subIdx) => (
                            <li key={subIdx} className="flex items-start">
                              <ChevronRight size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-3">
              Examples of data analysis in the tutorial and homework
            </h1>
            <ScrollAnimation type="slideUp" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
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

      {/* CTA Section */}
      <CallToAction 
        title="Ready to Master Data Analysis?"
        description="Join our comprehensive training program and learn from industry experts."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/services"
      />
    </>
  );
};

export default DataAnalysis;