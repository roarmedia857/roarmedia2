import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: string;
}) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 bg-[#ff4c00]/10 rounded-full flex items-center justify-center mb-6">
        <div className="text-[#ff4c00] text-xl" dangerouslySetInnerHTML={{ __html: icon }}></div>
      </div>
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: '🚗',
      title: 'Automobile Marketing',
      description: 'From high-octane reels to test drive campaigns, we fuel your brand\'s social journey.'
    },
    {
      icon: '🍔',
      title: 'Food & Beverage Branding',
      description: 'Tasty visuals, drool-worthy stories, and campaigns that bring customers to your doorstep.'
    },
    {
      icon: '🏠',
      title: 'Real Estate Visibility',
      description: 'Property reels, walkthroughs, and client trust-building content.'
    },
    {
      icon: '👗',
      title: 'Fashion & Lifestyle',
      description: 'Trend-forward campaigns to capture Gen Z & Millennial buyers.'
    },
    {
      icon: '🎓',
      title: 'Institutional & Educational',
      description: 'From faculty intros to student stories — elevate your institute\'s presence.'
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 bg-[#ff4c00]/10 border border-[#ff4c00]/30 rounded-full">
            <p className="text-[#ff4c00] text-sm font-medium">What We Do</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tailored Content Solutions That Convert
          </h2>
          <p className="text-gray-700 text-lg">
            We create content that resonates with your audience and drives real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {services.slice(3, 5).map((service, index) => (
            <ServiceCard
              key={index + 3}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-[#ff4c00] hover:bg-[#ff4c00]/90">
            See Our Work <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
