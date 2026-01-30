import Link from 'next/link';
import Image from 'next/image';

const StaticFooter = () => {
  const currentYear = new Date().getFullYear();
  const footerText = `© ${currentYear} The Business Sidekick. All rights reserved.`;

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/secondry.png" 
                alt="TBS Logo" 
                className="w-full sm:w-32" 
                width={240}
                height={60}
                style={{ maxWidth: '15rem' }} 
              />
            </Link>
            <p className="text-secondary mb-4 font-body">
              Think. Build. Scale. An action-oriented learning hub for practical skills that convert directly into income.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="https://twitter.com/tbs" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="h-6 w-6 text-white hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://youtube.com/tbs" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg className="h-6 w-6 text-white hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="https://instagram.com/tbs" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="h-6 w-6 text-white hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-white hover:text-secondary transition-colors font-body">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-secondary transition-colors font-body">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-white hover:text-secondary transition-colors font-body">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-secondary transition-colors font-body">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-secondary transition-colors font-body">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-heading font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/community" className="text-white hover:text-secondary transition-colors font-body">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-white hover:text-secondary transition-colors font-body">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white hover:text-secondary transition-colors font-body">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white hover:text-secondary transition-colors font-body">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-white hover:text-secondary transition-colors font-body">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-white hover:text-secondary transition-colors font-body">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-white font-body">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>support@tbs.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Business St, Suite 100<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300 font-body mb-4 md:mb-0">
            {footerText}
          </p>
          <div className="flex space-x-6 text-sm text-gray-300 font-body">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StaticFooter;
