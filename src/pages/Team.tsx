import { Linkedin } from 'lucide-react';
import ScrollAnimation from '../components/ui/ScrollAnimation';
import SectionTitle from '../components/ui/SectionTitle';
import CallToAction from '../components/ui/CallToAction';

type TeamMemberProps = {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedIn?: string;
  delay?: number;
};

const TeamMember = ({ name, title, bio, image, linkedIn, delay = 0 }: TeamMemberProps) => {
  return (
    <ScrollAnimation type="slideUp" delay={delay}>
      <div className="card overflow-hidden h-full flex flex-col">
        <div className="aspect-w-1 aspect-h-1 relative overflow-hidden flex items-center justify-center">
          <img 
            src={image} 
            alt={`${name} - ${title}`} 
            className="h-80 object-cover object-center transition-transform duration-500 hover:scale-105 mx-auto"
          />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-primary-600 font-medium">{title}</p>
            </div>
            {linkedIn && (
              <a 
                href={linkedIn} 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-500 hover:text-primary-600 transition-colors"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <Linkedin size={20} />
              </a>
            )}
          </div>
          <p className="text-gray-600 mt-3">{bio}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Jimmy L.",
      title: "Founder & Lead Research Scientist",
      bio: "Dr. Jimmy L. holds a Ph.D. in Space Physics. He is a researcher and a pricipal investigator (PI) at UCLA. With over six years of experience leading machine learning development across science and industry domains, he leads FoxGlobe's research initiatives and strategic direction.",
      image: "/images/Team_JimmyLi.png",
      linkedIn: "https://linkedin.com"
    },
    {
      name: "David P.",
      title: "Re",
      bio: "David P. is an AI engineer known for his innovative contributions to 3-D computer vision. With a strong background in computational geometry processing and computervision, David has led the development of cutting-edge AI models used in finance and robotics. He continues to push the boundaries of what AI can achieve.",
      image: "/images/Team_DavidPark.png",
      linkedIn: "https://linkedin.com"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-purple-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation type="fadeIn">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Our Team
            </h1>
          </ScrollAnimation>
          <ScrollAnimation type="fadeIn" delay={200}>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Meet the experts behind FoxGlobe's innovative AI research, education, and consulting services.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container">
          <ScrollAnimation type="slideUp">
            <SectionTitle
              subtitle="THE EXPERTS"
              title="Meet Our Team"
              description="Our diverse team of researchers, educators, and consultants brings together expertise from multiple disciplines to advance AI technology and its applications."
              centered
            />
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                title={member.title}
                bio={member.bio}
                image={member.image}
                linkedIn={member.linkedIn}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <ScrollAnimation type="slideUp">
            <SectionTitle
              subtitle="OUR VALUES"
              title="What Drives Us"
              description="At FoxGlobe, our work is guided by core principles that shape our approach to AI research, education, and innovation."
              centered
            />
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScrollAnimation type="slideUp" delay={100}>
              <div className="card p-8 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6">
                  <span className="text-primary-600 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Scientific Excellence</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of scientific rigor in our research and educational programs, ensuring all our work is based on sound methodology and evidence.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation type="slideUp" delay={200}>
              <div className="card p-8 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6">
                  <span className="text-primary-600 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Ethical Innovation</h3>
                <p className="text-gray-600">
                  We are committed to developing and applying AI technologies in ways that are ethical, transparent, and beneficial to society, with careful consideration of potential impacts.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation type="slideUp" delay={300}>
              <div className="card p-8 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6">
                  <span className="text-primary-600 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaborative Growth</h3>
                <p className="text-gray-600">
                  We believe in the power of collaboration across disciplines and sectors, fostering partnerships that accelerate learning and drive meaningful innovation in AI.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction 
        title="Join Our Team"
        description="We're always looking for talented researchers, educators, and consultants to join our mission of advancing AI technology and its applications."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
      />
    </>
  );
};

export default Team;