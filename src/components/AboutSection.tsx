
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000" 
              alt="Team brainstorming session" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm py-2 px-4 rounded-full">
              <p className="text-sm font-medium">Our Process</p>
            </div>
          </div>
          
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-white/10 rounded-full">
              <p className="text-sm font-medium">About Us</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Where Strategy Meets Storytelling
            </h2>
            <p className="text-gray-300 mb-8">
              At RoarMedia, we go beyond likes and hashtags. We craft content that builds trust,
              drives sales, and creates loyal communities. Whether you're revving engines in the
              auto space or launching the next fashion drop, we know how to get eyes on your
              brand.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-[#ff4c00]/20 p-1 rounded">
                  <Check className="h-5 w-5 text-[#ff4c00]" />
                </div>
                <div>
                  <p className="font-medium">Deep niche expertise</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#ff4c00]/20 p-1 rounded">
                  <Check className="h-5 w-5 text-[#ff4c00]" />
                </div>
                <div>
                  <p className="font-medium">In-house content creators & editors</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#ff4c00]/20 p-1 rounded">
                  <Check className="h-5 w-5 text-[#ff4c00]" />
                </div>
                <div>
                  <p className="font-medium">Data-backed content calendars</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300">
              Our team of strategists, content creators, and data analysts work together to ensure
              every piece of content serves a purpose in your brand's journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
