
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="bg-white text-black py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-center mb-20">Contact Support</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold">Need Help?</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our support team is here to assist you. Whether you have questions, feedback, or need technical support, we're ready to help.
            </p>
            <div className="pt-4">
              <p className="text-gray-500 mb-2">Email us at:</p>
              <a 
                href="mailto:support@loopstudio.tech" 
                className="text-xl md:text-2xl font-bold border-b-2 border-black pb-1 hover:opacity-60 transition-opacity inline-block"
              >
                support@loopstudio.tech
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold block">Name</label>
              <input 
                required
                id="name"
                type="text" 
                className="w-full px-4 py-3 rounded-xl contact-input transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold block">Email</label>
              <input 
                required
                id="email"
                type="email" 
                className="w-full px-4 py-3 rounded-xl contact-input transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold block">How can we help?</label>
              <textarea 
                required
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-xl contact-input transition-colors resize-none"
              />
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-5 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
