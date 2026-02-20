import React, { useState, useEffect } from 'react';
import { Page } from './types.ts';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import LegalPage from './components/LegalPage.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  useEffect(() => {
    const handleLocationChange = () => {
      const params = new URLSearchParams(window.location.search);
      const redirectPath = params.get('p');
      
      // If we've been redirected by 404.html
      if (redirectPath) {
        const cleanPath = redirectPath.replace(/^\//, '');
        
        // Construct the new URL with the hash, preserving the current pathname (the repo name)
        // Ensure we don't end up with multiple slashes
        const basePath = window.location.pathname.endsWith('/') 
          ? window.location.pathname 
          : window.location.pathname + '/';
          
        const newUrl = basePath + (cleanPath ? '#' + cleanPath : '');
        
        // Update URL to the clean hash version
        window.history.replaceState(null, '', newUrl);
        
        if (Object.values(Page).includes(cleanPath as Page)) {
          setCurrentPage(cleanPath as Page);
          return;
        }
      }

      // Standard hash-based routing
      const hash = window.location.hash.replace('#', '');
      if (Object.values(Page).includes(hash as Page)) {
        setCurrentPage(hash as Page);
      } else {
        setCurrentPage(Page.HOME);
      }
    };

    window.addEventListener('hashchange', handleLocationChange);
    // Handle the initial load (including potential redirects)
    handleLocationChange();

    return () => window.removeEventListener('hashchange', handleLocationChange);
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
            lastUpdated="February 20, 2026"
            content={privacyContent}
            onBack={() => navigateTo(Page.HOME)}
          />
        )}
        
        {currentPage === Page.TERMS && (
          <LegalPage 
            title="Terms of Service" 
            lastUpdated="February 20, 2026"
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
      <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
      <p>Loop Studio ("we," "us," or "our") develops and publishes mobile applications and operates the website at loopstudio.tech (collectively, the "Services"). This Privacy Policy explains how we collect, use, and protect your information when you use any of our applications or visit our website.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">2. Information We Collect</h2>
      <p className="mb-4">We may collect the following types of information depending on the Services you use:</p>

      <h3 className="text-lg font-semibold mb-3 text-white">Information You Provide:</h3>
      <ul className="list-disc pl-6 space-y-3 mb-6">
        <li>Name, email address, and message content submitted through contact forms or support requests.</li>
        <li>Photos, images, or other content you submit through our applications for analysis or identification purposes.</li>
        <li>Account or profile information if you create an account within any of our applications.</li>
      </ul>

      <h3 className="text-lg font-semibold mb-3 text-white">Information Collected Automatically:</h3>
      <ul className="list-disc pl-6 space-y-3 mb-6">
        <li>Device information such as device type, operating system, unique device identifiers, and language settings.</li>
        <li>Usage data including features accessed, scan or analysis history, session duration, and interaction patterns.</li>
        <li>Standard web log data, IP addresses, and analytics information when you visit our website.</li>
        <li>Crash reports and diagnostic data to help us identify and fix technical issues.</li>
      </ul>

      <h3 className="text-lg font-semibold mb-3 text-white">Information from Third-Party Services:</h3>
      <p>Our applications may integrate third-party services such as analytics providers, cloud processing services, or advertising networks. These services may independently collect information in accordance with their own privacy policies.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">3. Use of Information</h2>
      <p className="mb-4">We use the information we collect to:</p>
      <ul className="list-disc pl-6 space-y-3">
        <li>Provide, operate, and deliver the core features of our applications and website.</li>
        <li>Process and analyze content you submit through our applications (such as photos for identification or scanning purposes).</li>
        <li>Respond to your inquiries and provide customer support.</li>
        <li>Improve, personalize, and develop our Services.</li>
        <li>Monitor usage patterns and analyze trends to enhance user experience.</li>
        <li>Communicate with you about updates, new features, or promotional content (with your consent where required).</li>
        <li>Detect, prevent, and address technical issues, fraud, or security threats.</li>
        <li>Comply with legal obligations.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">4. Photos and User-Submitted Content</h2>
      <p>When you use features in our applications that involve submitting photos, images, or other content for analysis, that content is used solely to provide the requested functionality. We do not use your submitted content for advertising purposes. Content may be processed on your device, on our servers, or through third-party processing services to deliver results. We do not retain your submitted content longer than necessary to provide the requested service, unless you choose to save results within the application.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">5. Cookies and Tracking</h2>
      <p>We use cookies and similar technologies on our website to enhance your browsing experience and analyze website traffic. Our applications may use similar tracking technologies for analytics and performance monitoring. You can control cookie preferences through your browser or device settings.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">6. Data Sharing</h2>
      <p className="mb-4">Loop Studio does not sell, rent, or trade your personal information to third parties. We may share information only in the following circumstances:</p>
      <ul className="list-disc pl-6 space-y-3">
        <li>With trusted service providers who assist us in operating our Services, subject to confidentiality obligations.</li>
        <li>When required by law, regulation, or legal process, or to protect the rights, property, or safety of Loop Studio, our users, or the public.</li>
        <li>In connection with a merger, acquisition, or sale of assets, in which case your information may be transferred as part of that transaction.</li>
        <li>With your explicit consent.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">7. Data Retention</h2>
      <p>We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, or as required by law. When your data is no longer needed, we delete or anonymize it.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">8. Security</h2>
      <p>We implement commercially reasonable security measures to protect your personal information. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">9. Children's Privacy</h2>
      <p>Our Services are not directed at children under the age of 13 (or the applicable minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will take steps to delete such information.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">10. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal information. To exercise any of these rights, please contact us using the details below.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">11. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Changes will be posted within our Services with an updated "Last Updated" date. Your continued use of our Services after any changes constitutes acceptance of the revised policy.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">12. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, you may contact us at <a href="mailto:support@loopstudio.tech" className="text-white underline underline-offset-4">support@loopstudio.tech</a></p>
    </section>
  </div>
);

const termsContent = (
  <div className="space-y-10 text-gray-300 leading-relaxed">
    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
      <p>By downloading, accessing, or using any Loop Studio application or visiting the Loop Studio website (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">2. Description of Services</h2>
      <p>Loop Studio develops and publishes mobile applications that may include features such as image analysis, identification, scanning, and other functionalities. The specific features available depend on the application you are using. Our Services may change, and we may add, modify, or discontinue features at any time without prior notice.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">3. Use of Services</h2>
      <p>You agree to use our Services only for lawful purposes and in accordance with these terms. You are responsible for ensuring that your use of the Services complies with all applicable laws and regulations in your jurisdiction. You agree not to misuse our Services, interfere with their operation, or attempt to access them through unauthorized means.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">4. Informational Purposes Only</h2>
      <p>The analysis, identification, results, recommendations, and any other information provided through our applications are for informational and educational purposes only. They do not constitute professional advice (including but not limited to medical, environmental, safety, or legal advice). You should always consult qualified professionals before taking action based on information provided by our applications. Loop Studio makes no guarantees regarding the accuracy, completeness, or reliability of any results or information provided through the Services.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">5. User Content</h2>
      <p>You retain ownership of any content (including photos and images) you submit through our Services. By submitting content, you grant Loop Studio a limited, non-exclusive license to process and analyze that content solely for the purpose of delivering the requested service to you.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">6. Subscriptions and Purchases</h2>
      <p>Some of our applications may offer subscription plans or in-app purchases. Payment terms, pricing, renewal policies, and cancellation procedures are presented within the application at the time of purchase and are governed by the applicable app store's (Apple App Store or Google Play Store) terms and policies.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">7. Intellectual Property</h2>
      <p>All trademarks, logos, service marks, application designs, content, and software associated with our Services are the property of Loop Studio or their respective owners. You may not reproduce, distribute, or create derivative works from any part of our Services without our prior written consent.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">8. Disclaimer of Warranties</h2>
      <p>Our Services are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. Loop Studio disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Services will be uninterrupted, error-free, or free of harmful components.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">9. Limitation of Liability</h2>
      <p>To the fullest extent permitted by law, Loop Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill arising out of or in connection with your use of or inability to use our Services, regardless of the cause of action or theory of liability.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">10. Indemnification</h2>
      <p>You agree to indemnify, defend, and hold harmless Loop Studio, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or related to your use of the Services or your violation of these terms.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">11. Termination</h2>
      <p>We reserve the right to suspend or terminate your access to our Services at any time, with or without cause, and with or without notice. Upon termination, your right to use the Services will immediately cease.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">12. Changes to These Terms</h2>
      <p>We may update these Terms of Service from time to time. Changes will be posted within our Services with an updated "Last Updated" date. Your continued use of our Services after any changes constitutes acceptance of the revised terms.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">13. Governing Law</h2>
      <p>These Terms of Service are governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law provisions.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">14. Contact Us</h2>
      <p>If you have any questions about these Terms of Service, you may contact us at <a href="mailto:support@loopstudio.tech" className="text-white underline underline-offset-4">support@loopstudio.tech</a></p>
    </section>
  </div>
);

export default App;