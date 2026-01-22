
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LegalPage from './components/LegalPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Simple hash-based routing helper
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
            lastUpdated="January 22, 2026"
            content={privacyContent}
            onBack={() => navigateTo(Page.HOME)}
          />
        )}
        
        {currentPage === Page.TERMS && (
          <LegalPage 
            title="Terms of Service" 
            lastUpdated="January 22, 2026"
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
      <p>This Privacy Policy explains how SwipeAway ("we", "us", "our") collects, uses, and shares information when you use the SwipeAway iOS app (the "App"). By using the App, you agree to this Privacy Policy.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">2. Photo Library Data</h2>
      <p>SwipeAway requests access to your photo library to display photos and videos for you to review and delete. We do not upload or store your photos or videos on our servers. Your media content stays on your device.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">3. Data Used to Track You (with permission)</h2>
      <p className="mb-4">If you allow tracking via Apple App Tracking Transparency (ATT), we may share certain data with partners for advertising attribution and measurement:</p>
      <ul className="list-disc pl-6 space-y-3">
        <li><strong>Identifiers:</strong> IDFA (Identifier for Advertisers)</li>
        <li><strong>Usage Data:</strong> ad engagement and install events (for attribution/measurement)</li>
      </ul>
      <p className="mt-4">We use this with:</p>
      <ul className="list-disc pl-6 space-y-3 mt-2">
        <li><strong>Singular</strong> (attribution and campaign measurement)</li>
        <li><strong>TikTok Ads</strong> (ad performance measurement)</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">4. Data Linked to You</h2>
      <p className="mb-4">We may collect the following information which may be linked to you (for example via device identifiers):</p>
      <ul className="list-disc pl-6 space-y-3">
        <li><strong>Purchases:</strong> subscription events and receipt validation via RevenueCat. We do not collect or store your payment card details; Apple processes payments.</li>
        <li><strong>Contact Info:</strong> if you email support, we collect your name/email and message content to respond.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">5. How We Use Data</h2>
      <p className="mb-4">We use information to:</p>
      <ul className="list-disc pl-6 space-y-3">
        <li>Provide and improve the App</li>
        <li>Measure advertising performance and attribution (if tracking is allowed)</li>
        <li>Manage subscriptions and customer support</li>
        <li>Prevent fraud and troubleshoot issues</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">6. Sharing</h2>
      <p>We do not sell your personal information. We share information with service providers (RevenueCat, Singular, TikTok) only to operate the App and measure campaigns, consistent with this policy.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">7. Your Choices</h2>
      <ul className="list-disc pl-6 space-y-3">
        <li><strong>Tracking (ATT):</strong> You can allow or deny tracking when prompted, and change it anytime in iOS Settings > Privacy & Security > Tracking.</li>
        <li><strong>Access / Deletion:</strong> You can request access to or deletion of support communications by emailing us.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">8. Data Retention</h2>
      <p>We retain personal information only as long as necessary for the purposes described above and as required by law.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">9. Contact</h2>
      <p>Questions? Contact us at <a href="mailto:support@loopstudio.tech" className="text-white underline underline-offset-4">support@loopstudio.tech</a></p>
    </section>
  </div>
);

const termsContent = (
  <div className="space-y-10 text-gray-300 leading-relaxed">
    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
      <p>By downloading or using the SwipeAway mobile application ("App"), you agree to be bound by these Terms of Service and the Apple Standard Licensed Application End User License Agreement (EULA). If you do not agree, do not use the App.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">2. Subscription Terms</h2>
      <p className="mb-4">SwipeAway may offer "Pro" features via subscription. Subscriptions are managed through Apple’s In-App Purchase system and RevenueCat.</p>
      <ul className="list-disc pl-6 space-y-3">
        <li><strong>Billing:</strong> Payment is charged to your Apple ID at confirmation of purchase.</li>
        <li><strong>Renewal:</strong> Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.</li>
        <li><strong>Management:</strong> You can manage or cancel subscriptions in your App Store account settings.</li>
        <li><strong>Refunds:</strong> All payments are processed by Apple. Refund requests must be directed to Apple Support.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">3. Prohibited Uses</h2>
      <p>You may not use the App for any illegal or unauthorized purpose. You agree not to reverse engineer, decompile, or bypass any security or subscription verification mechanisms, including those provided by RevenueCat.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">4. Privacy & Tracking</h2>
      <p>Your use of the App is governed by our Privacy Policy. By using the App, you acknowledge our use of attribution tools (Singular) and advertising platforms (TikTok) in accordance with your App Tracking Transparency preferences.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">5. Limitation of Liability</h2>
      <p className="mb-4">To the maximum extent permitted by law, SwipeAway shall not be liable for any indirect, incidental, special, or consequential damages arising from use of the App.</p>
      <p>You acknowledge that deleting photos is irreversible and SwipeAway is not responsible for accidental or unintended data loss.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4 text-white">6. Governing Law</h2>
      <p>These Terms are governed by the laws of Singapore, without regard to conflict of law principles.</p>
    </section>
  </div>
);

export default App;
