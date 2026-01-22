import React from 'react';
import { Service } from '../types.ts';

const services: Service[] = [
  {
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Native iOS and Android applications built with cutting-edge technology and attention to detail.'
  },
  {
    icon: '💻',
    title: 'Web Apps',
    description: 'Responsive web applications that work seamlessly across all devices and platforms.'
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with your users in mind.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group p-8 bg-[#111] border border-white/5 rounded-3xl hover:border-white/20 transition-all hover:-translate-y-2"
          >
            <div className="text-5xl mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;