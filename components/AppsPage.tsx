import React from 'react';

interface AppsPageProps {
  onBack: () => void;
}

interface StudioApp {
  name: string;
  subtitle: string;
  category: string;
  icon: string;
  url: string;
}

const apps: StudioApp[] = [
  { name: 'Medical Assistant: AskMed AI', subtitle: 'Medical Guidelines & Research', category: 'Education', icon: '/apps/askmed.png', url: 'https://apps.apple.com/app/id6776077826' },
  { name: 'Sports Card Scanner: GrailScan', subtitle: 'Scan, Value & Track Your Cards', category: 'Sports', icon: '/apps/grailscan.png', url: 'https://apps.apple.com/app/id6759663017' },
  { name: 'Interior Design: Roomy AI', subtitle: 'Room Planner & House Design', category: 'Graphics & Design', icon: '/apps/roomy.png', url: 'https://apps.apple.com/app/id6759851023' },
  { name: 'Photo Cleaner: SwipeAway', subtitle: 'Free Up Space & Camera Roll', category: 'Utilities', icon: '/apps/swipeaway.png', url: 'https://apps.apple.com/app/id6757777938' },
  { name: 'Mold Identifier: AI Inspection', subtitle: 'Home Mold Scanner and Test', category: 'Utilities', icon: '/apps/mold-identifier.png', url: 'https://apps.apple.com/app/id6759081382' },
  { name: 'Learn Quran Daily: Qaria', subtitle: 'Lessons, Quizzes & Reflection', category: 'Education', icon: '/apps/qaria.png', url: 'https://apps.apple.com/app/id6811126805' },
];

const AppsPage: React.FC<AppsPageProps> = ({ onBack }) => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-24 min-h-[80vh]">
      <button
        onClick={onBack}
        className="text-gray-500 hover:text-white mb-12 flex items-center gap-2 group transition-colors"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        Back to Home
      </button>

      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Our Apps</h1>
        <p className="text-gray-600 font-medium">Apps by Loop Studio, available on the App Store.</p>
      </header>

      <ul className="space-y-4">
        {apps.map((app) => (
          <li key={app.url}>
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-4 rounded-2xl border border-white/10 hover:border-white/30 transition-colors"
            >
              <img src={app.icon} alt="" width={64} height={64} className="w-16 h-16 rounded-2xl shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-white font-semibold">{app.name}</p>
                <p className="text-gray-400 text-sm">{app.subtitle}</p>
                <p className="text-gray-600 text-xs mt-1">{app.category}</p>
              </div>
              <span className="text-gray-500 text-sm shrink-0 hidden sm:inline">App Store →</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppsPage;
