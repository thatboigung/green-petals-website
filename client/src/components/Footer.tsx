import { Link } from "wouter";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-display font-bold tracking-tighter">
              <span className="text-white">GFG</span>
              <span className="text-primary">STUDIOS</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Unleashing creativity and elevating brands through premium digital solutions.
              We bridge the gap between vision and reality.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="hover:text-primary transition-colors cursor-pointer">Branding & Identity</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Digital Marketing</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Photography & Video</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="hover:text-primary transition-colors cursor-pointer"><Link href="/about">About Us</Link></li>
              <li className="hover:text-primary transition-colors cursor-pointer"><Link href="/pricing">Pricing</Link></li>
              <li className="hover:text-primary transition-colors cursor-pointer"><Link href="/contact">Contact</Link></li>
              <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://wa.me/+263788513666" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                <FaWhatsapp size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all">
                <FaFacebook size={18} />
              </a>
            </div>
            <p className="text-sm text-white/60">
              Harare, Zimbabwe<br />
              info@gfgstudios.com
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} GFG Studios. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
