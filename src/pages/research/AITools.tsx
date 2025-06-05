import { PenTool, Database, LineChart, ChevronRight } from 'lucide-react';
import ScrollAnimation from '../../components/ui/ScrollAnimation';
import SectionTitle from '../../components/ui/SectionTitle';
import CallToAction from '../../components/ui/CallToAction';

const AITools = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-purple-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation type="fadeIn">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              AI Tools in Research
            </h1>
          </ScrollAnimation>
          <ScrollAnimation type="fadeIn" delay={200}>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Learn how to effectively leverage modern AI tools to enhance research workflows and accelerate scientific discovery.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
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

      {/* CTA Section */}
      <CallToAction 
        title="Ready to Enhance Your Research?"
        description="Learn how to leverage AI tools effectively in your research workflow."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/services"
      />
    </>
  );
};

export default AITools;