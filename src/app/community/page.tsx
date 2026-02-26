import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

export const metadata = {
  title: 'Community | Join Our Trusted Network',
  description: 'Connect with a trusted network of entrepreneurs, freelancers, and business owners in the TBS community.',
};

export default function CommunityPage() {
  const socialHubs = [
    {
      title: "WhatsApp Group",
      platform: "WhatsApp",
      desc: "Instant updates and direct networking with fellow members.",
      link: "https://whatsapp.com/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-600">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      )
    },
    {
      title: "Discord Community",
      platform: "Discord",
      desc: "Join live discussions and access weekly community hangouts.",
      link: "https://discord.com/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-indigo-600">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.862-1.297 1.197-1.99a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.863-.886.077.077 0 0 1-.008-.128c.156-.117.311-.238.461-.362a.077.077 0 0 1 .08-.01c3.952 1.807 8.24 1.807 12.144 0a.077.077 0 0 1 .081.01c.15.124.305.245.461.362a.077.077 0 0 1-.008.128 12.116 12.116 0 0 1-1.863.886.076.076 0 0 0-.041.106c.335.693.735 1.36 1.197 1.99a.078.078 0 0 0 .084.028 19.83 19.83 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      )
    },
    {
      title: "Telegram Channel",
      platform: "Telegram",
      desc: "Get exclusive alerts and broadcast updates about new tools.",
      link: "https://telegram.org/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-sky-600">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.257.257-.527.257l.197-2.818 5.128-4.628c.223-.198-.048-.307-.346-.11l-6.338 3.99-2.73-.854c-.594-.185-.605-.594.124-.88l10.682-4.116c.495-.18.93.118.784.818z"/>
        </svg>
      )
    }
  ];

  return (
    <MainLayout>
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Join Our Trusted Community
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Connect with a vetted network of entrepreneurs and grow together.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          {/* Trusted Hubs Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-heading font-bold text-text uppercase tracking-tight">Access Our Hubs</h2>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialHubs.map((hub, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="mb-6">{hub.icon}</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{hub.platform}</div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">{hub.title}</h3>
                  <p className="text-neutral-600 mb-6 text-sm leading-relaxed">{hub.desc}</p>
                  <Link
                    href={hub.link}
                    target="_blank"
                    className="inline-flex items-center text-primary font-bold text-sm hover:underline"
                  >
                    Join Hub <span className="ml-2">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Original Guidelines Style */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-heading font-bold text-text mb-6">Community Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <p className="text-neutral-700 text-sm">Be respectful and supportive of other members.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <p className="text-neutral-700 text-sm">Share your knowledge and experiences generously.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <p className="text-neutral-700 text-sm">No self-promotion or spam without prior approval.</p>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <p className="text-neutral-700 text-sm">Respect the privacy and confidentiality of other members.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <p className="text-neutral-700 text-sm">Provide constructive feedback when asked.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">•</span>
                  <p className="text-neutral-700 text-sm">Keep discussions professional and high-value.</p>
                </li>
              </ul>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="bg-primary rounded-3xl shadow-lg p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Build Your Success Network</h2>
            <p className="text-secondary max-w-xl mx-auto mb-8 font-medium">
              Join thousands of vetted members who are scaling their businesses through collaborative learning.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-secondary text-primary rounded-full hover:bg-white transition-all font-bold uppercase text-xs tracking-widest shadow-md"
            >
              Request Full Access
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
