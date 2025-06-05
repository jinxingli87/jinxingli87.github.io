import { Brain, Network, Code, ChevronRight, LineChart, Cpu, BookOpen } from 'lucide-react';
import ScrollAnimation from '../../components/ui/ScrollAnimation';
import SectionTitle from '../../components/ui/SectionTitle';
import CallToAction from '../../components/ui/CallToAction';

const MachineLearning = () => {
  const researchExamples = [
    {
      title: "Space Environment Prediction",
      description: "Neural networks predicting high-energy particle distributions in space, helping to understand and forecast space weather conditions.",
      images: [{ src: "/images/animation_ai_space.gif", alt: "Space Environment Prediction" }]
    },
    {
      title: "Air Quality Prediction",
      description: "Machine learning models analyzing weather conditions to predict air quality indices and pollution levels.",
      images: [{ src: "/images/ml_air_quality.png", alt: "Air Quality Prediction" }]
    },
    {
      title: "Galaxy Classification",
      description: "Using CNNs to automatically classify galaxies into different morphological types (spiral, elliptical, or irregular) based on their visual characteristics.",
      images: [{ src: "/images/ml_galaxy.jpg", alt: "Galaxy Classification" }]
    },
    {
      title: "Housing Price Prediction",
      description: "Neural networks analyzing historical data to predict housing prices based on various features and market conditions.",
      images: [{ src: "/images/ml_housing_prices.png", alt: "Housing Price Prediction" }]
    }
  ];

  return (
    <>
      <section className="pt-20 pb-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-purple-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation type="fadeIn">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Machine Learning and Applications
            </h1>
          </ScrollAnimation>
          <ScrollAnimation type="fadeIn" delay={200}>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              From fundamentals to advanced applications in scientific research
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <ScrollAnimation type="slideUp">
            <div className="space-y-1">
              <p className="text-sm text-gray-600 mb-8">
                Designed for high school students and above who are interested in research with AI and have completed the Data Analysis program. This program covers the following contents.
              </p>

              <div className="card p-6">
                <h2 className="text-xl font-semibold mb-4">Introduction to Machine Learning</h2>
                <ul className="space-y-2">
                  <li>
                    <div className="flex items-start">
                      <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={16} />
                      <div>
                        <span className="font-medium">What is ML:</span> Systems that learn from data and improve through experience
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start">
                      <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={16} />
                      <div>
                        <span className="font-medium">Learning Types:</span> Supervised (labeled data), Unsupervised (pattern finding)
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h2 className="text-xl font-semibold mb-4">Neural Networks (MLP)</h2>
                <ul className="space-y-2">
                  <li>
                    <div className="flex items-start">
                      <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={16} />
                      <div>
                        <span className="font-medium">Structure:</span> Input layer → Hidden layers → Output layer; Neurons, weights, biases
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start">
                      <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={16} />
                      <div>
                        <span className="font-medium">Learning:</span> Forward propagation, backpropagation, gradient descent
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start">
                      <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={16} />
                      <div>
                        <span className="font-medium">Components:</span> Activation functions (ReLU, sigmoid), optimization (SGD, Adam)
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h2 className="text-xl font-semibold mb-4">Advanced Networks</h2>
                <ul className="space-y-2">
                  <li>
                    <div className="flex items-start">
                      <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={16} />
                      <div>
                        <span className="font-medium">CNN:</span> Image processing, feature extraction, computer vision tasks
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start">
                      <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={16} />
                      <div>
                        <span className="font-medium">RNN/LSTM:</span> Sequential data, natural language processing
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h2 className="text-xl font-semibold mb-4">Practical Examples</h2>
                <ul className="space-y-2">
                  <li>
                    <div className="flex items-start">
                      <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={16} />
                      <div>
                        <span className="font-medium">Regression:</span> Linear and nonlinear prediction models
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start">
                      <ChevronRight className="text-primary-600 mt-1 mr-2 flex-shrink-0" size={16} />
                      <div>
                        <span className="font-medium">Classification:</span> XOR problem, digit recognition with neural networks
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">ML Applications in Research Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {researchExamples.map((example, index) => (
                    <div key={index} className="card overflow-hidden">
                      <div className="relative pt-[75%]">
                        {example.videos && example.videos.length > 0 ? (
                          <video
                            src={example.videos[0].src}
                            title={example.videos[0].alt}
                            className="absolute top-0 left-0 w-full h-full object-contain bg-white"
                            controls
                          />
                        ) : example.images && example.images.length > 0 ? (
                          <img
                            src={example.images[0].src}
                            alt={example.images[0].alt}
                            className="absolute top-0 left-0 w-full h-full object-contain bg-white"
                          />
                        ) : null}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                        <p className="text-gray-600">{example.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <CallToAction 
        title="Ready to Master Machine Learning?"
        description="Join our comprehensive program and learn how to apply machine learning in real-world scenarios."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/services"
      />
    </>
  );
};

export default MachineLearning;