import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 font-manrope">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-4"> {/* reduced from py-6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4"> {/* reduced gap & mb */}

          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-3 group"> {/* mb reduced */}
              <img
                src="/logo.jpeg"
                alt="TechRise Logo"
                className="w-16 h-16 object-cover rounded-2xl shadow-xl ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300" 
              />
            </div>

            <h2 className="text-xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mufasa Ltd
            </h2>

            <p className="text-gray-400 leading-relaxed mb-3 text-sm"> {/* mb reduced */}
              Building reliable IT solutions and digital services.
            </p>

            <div className="flex gap-2.5"> {/* smaller gap */}
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Github, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-2 bg-slate-800/50 rounded-xl hover:bg-blue-600/40 transition duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
              Company
            </h3>

            <ul className="space-y-1.5"> {/* smaller spacing */}
              {[
                { name: "About Us", path: "/about" },
                { name: "Careers", path: "/careers" },
                { name: "Blog", path: "/blog" },
                { name: "Partners", path: "/partners" }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="text-gray-400 hover:text-white transition flex items-center gap-2 text-sm"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
              Contact
            </h3>

            <ul className="space-y-2"> {/* smaller spacing */}
              <li className="flex items-start gap-2.5">
                <div className="p-2 bg-slate-800/50 rounded-lg">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-400 text-sm">Kigali, Rwanda</span>
              </li>

              <li className="flex items-start gap-2.5">
                <div className="p-2 bg-slate-800/50 rounded-lg">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <a href="tel:+250788000000" className="text-gray-400 text-sm hover:text-white">
                  +250 788 000 000
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <div className="p-2 bg-slate-800/50 rounded-lg">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <a href="mailto:support@techrise.com" className="text-gray-400 text-sm hover:text-white">
                  support@techrise.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-800/50 pt-3 mb-3"> {/* reduced pt & mb */}
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-white font-semibold mb-1">Stay Updated</h3>
            <p className="text-gray-400 text-xs mb-2">Subscribe for updates</p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-md text-sm text-white"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md text-sm text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-3 flex flex-col sm:flex-row justify-between items-center text-xs gap-3">
          <p className="text-gray-500">
            © {new Date().getFullYear()} <span className="text-gray-400">TechRise</span>. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/cookies" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
