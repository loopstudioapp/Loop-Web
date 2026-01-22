
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LegalPage from './components/LegalPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Simple hash-based routing helper for static site compatibility (e.g. GitHub Pages)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (Object.values(Page).includes(hash as Page)) {
        setCurrentPage(hash as Page);
      } else {
        setCurrentPage(Page.HOME);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: Page) => {
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar onNavigate={navigateTo} />
      
      <main className="pt-20">
        {currentPage === Page.HOME && <Home onContactClick={() => {
           const contact = document.getElementById('contact');
           contact?.scrollIntoView({ behavior: 'smooth' });
        }} />}
        
        {currentPage === Page.PRIVACY && (
          <LegalPage 
            title="Privacy Policy" 
            lastUpdated="January 24, 2026"
            content={privacyContent}
            onBack={() => navigateTo(Page.HOME)}
          />
        )}
        
        {currentPage === Page.TERMS && (
          <LegalPage 
            title="Terms of Service" 
            lastUpdated="January 24, 2026"
            content={termsContent}
            onBack={() => navigateTo(Page.HOME)}
          />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

const privacyContent = (
  <div className="space-y-10 text-gray-300 leading-relaxed">
    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">1. Information We Collect</h2>
      <p>At Loop Studio, we value your privacy. We collect information you provide directly to us through our contact forms, including your name, email address, and the content of your message. We also collect standard web log data and analytics information to improve our website experience.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">2. Use of Information</h2>
      <p className="mb-4">We use the information we collect to:</p>
      <ul className="list-disc pl-6 space-y-3">
        <li>Respond to your inquiries and provide customer support.</li>
        <li>Understand how visitors interact with our website to improve our services.</li>
        <li>Communicate with you about our project updates or agency news (if opted-in).</li>
        <li>Protect our website from security threats and fraudulent activity.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">3. Cookies and Tracking</h2>
      <p>We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings. We may use third-party analytics services like Google Analytics to help us understand website usage.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">4. Data Sharing</h2>
      <p>Loop Studio does not sell, rent, or trade your personal information to third parties. We only share information with trusted service providers who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">5. Security</h2>
      <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information on our site.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">6. Your Rights</h2>
      <p>You have the right to request access to the personal data we hold about you, or to ask that your data be deleted or corrected. Please contact us at the email below to exercise these rights.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">7. Contact Us</h2>
      <p>If there are any questions regarding this privacy policy, you may contact us at <a href="mailto:support@loopstudio.tech" className="text-white underline underline-offset-4">support@loopstudio.tech</a></p>
    </section>
  </div>
);

const termsContent = (
  <div className="space-y-10 text-gray-300 leading-relaxed">
    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
      <p>By accessing and using the Loop Studio website, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all visitors, users, and others who access the website.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">2. Use of the Website</h2>
      <p>The content on this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">3. Intellectual Property</h2>
      <p>All trademarks, logos, and service marks displayed on the website are the property of Loop Studio or their respective owners. You are not permitted to use these marks without the prior written consent of Loop Studio or the third party that owns the marks.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">4. Disclaimer of Warranties</h2>
      <p>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">5. Limitation of Liability</h2>
      <p>In no event shall Loop Studio be liable for any direct, indirect, special, punitive, incidental, or consequential damages, or any damages whatsoever resulting from loss of use, data, or profits, whether in an action of contract, negligence, or other tortious action, arising out of or in connection with the use or performance of information available from this website.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">6. Governing Law</h2>
      <p>These terms and conditions are governed by and construed in accordance with the laws of Singapore and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">7. Modifications</h2>
      <p>Loop Studio reserves the right to revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of Service.</p>
    </section>
  </div>
);

export default App;
