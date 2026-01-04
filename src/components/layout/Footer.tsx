import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shadow-soft">
                <span className="text-primary-foreground font-display font-bold text-xl">V</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Vandana Sweets</h3>
                <p className="text-sm text-secondary-foreground/70">Since 1995</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Bringing the authentic taste of traditional Indian sweets to your celebrations. 
              Made with love, pure ghee, and finest ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm">
                  Mirchaibari, Katihar<br />Near Hanuman Mandir
                </span>
              </li>
              <li>
                <a href="tel:7488774336" className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  7488774336
                </a>
              </li>
              <li>
                <a href="mailto:vandanasweets@email.com" className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  vandanasweets@email.com
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Working Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-secondary-foreground/80 text-sm">Mon - Sat: 8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-secondary-foreground/80 text-sm">Sunday: 9:00 AM - 8:00 PM</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-10 pt-6 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Vandana Sweets. All rights reserved. | Owner: Raja Kumar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
