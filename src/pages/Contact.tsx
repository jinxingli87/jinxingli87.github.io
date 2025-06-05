import { Mail, MapPin } from 'lucide-react';
import ScrollAnimation from '../components/ui/ScrollAnimation';
import SectionTitle from '../components/ui/SectionTitle';
import CallToAction from '../components/ui/CallToAction';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-purple-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation type="fadeIn">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Get in Touch
            </h1>
          </ScrollAnimation>
          <ScrollAnimation type="fadeIn" delay={200}>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Have questions about our services or interested in collaboration? We'd love to hear from you.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 items-start">
            <ScrollAnimation type="slideUp">
              <div>
                <SectionTitle
                  subtitle="CONTACT US"
                  title="Get in Touch"
                  description="We're here to help and answer any questions you might have."
                />
                
                <div className="mt-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary-600 mt-1">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email Us</h3>
                      <p className="text-gray-600">
                        <a 
                          href="mailto:foxglobe2023@gmail.com" 
                          className="hover:text-primary-600 transition-colors"
                        >
                          foxglobe2023@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-primary-600 mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Visit Our Website</h3>
                      <p className="text-gray-600">
                        <a 
                          href="https://resai.us" 
                          target="_blank" 
                          rel="noreferrer"
                          className="hover:text-primary-600 transition-colors"
                        >
                          https://resai.us
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <ScrollAnimation type="slideUp">
            <SectionTitle
              subtitle="FAQ"
              title="Frequently Asked Questions"
              description="Find answers to common questions about our services and how we can help you."
              centered
            />
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                question: "What services does ResAI offer?",
                answer: "ResAI specializes in AI research, education, and consulting services. We help businesses leverage AI technologies, provide comprehensive educational programs, and offer expert consulting on AI implementation strategies."
              },
              {
                question: "How can I request a custom AI solution for my business?",
                answer: "You can contact us through email at foxglobe2023@gmail.com with details about your business needs. Our team will get back to you to discuss your requirements and propose tailored solutions."
              },
              {
                question: "Do you offer training for teams and organizations?",
                answer: "Yes, we provide customized training programs for teams and organizations looking to enhance their AI and data analysis capabilities. These programs can be tailored to your specific industry and skill level requirements."
              },
              {
                question: "How quickly can I expect a response to my inquiry?",
                answer: "We typically respond to all inquiries within 1-2 business days. For urgent matters, please indicate the time sensitivity in your message, and we'll do our best to prioritize your request."
              }
            ].map((item, index) => (
              <ScrollAnimation key={index} type="slideUp" delay={index * 100}>
                <div className="card p-6 h-full">
                  <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="bg-gray-100 rounded-xl overflow-hidden aspect-w-16 aspect-h-7">
            <div className="flex items-center justify-center h-full">
              <div className="text-center p-8">
                <MapPin size={48} className="mx-auto text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">ResAI</h3>
                <p className="text-gray-600">
                  Contact us at <a href="mailto:foxglobe2023@gmail.com" className="text-primary-600 hover:underline">foxglobe2023@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;