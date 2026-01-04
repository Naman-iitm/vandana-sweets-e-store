import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Heart, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our Story
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Three decades of crafting authentic Indian sweets with love, tradition, and the finest ingredients
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-medium">Since 1995</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                A Legacy of Sweet Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Vandana Sweets was born from a simple dream – to bring the authentic taste of 
                traditional Indian sweets to every household in Katihar. Founded by 
                <strong className="text-foreground"> Raja Kumar</strong> in 1995, our journey 
                began in a small shop near Hanuman Mandir in Mirchaibari.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What started as a humble family venture has now become a beloved destination 
                for sweets lovers. Our secret? The unwavering commitment to quality and the 
                age-old recipes passed down through generations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we take pride in serving thousands of happy customers, making their 
                celebrations sweeter with our handcrafted delicacies. From weddings to 
                festivals, from small family gatherings to grand celebrations, Vandana Sweets 
                has been an integral part of countless precious moments.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600"
                  alt="Traditional sweet making"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-card">
                <div className="text-4xl font-display font-bold text-primary">1995</div>
                <div className="text-sm text-muted-foreground">Established</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Pure Ingredients',
                desc: '100% pure desi ghee, fresh milk, and premium dry fruits in every sweet'
              },
              {
                icon: Users,
                title: 'Family Recipe',
                desc: 'Traditional recipes passed down through three generations'
              },
              {
                icon: Heart,
                title: 'Made with Love',
                desc: 'Every sweet is handcrafted with care and attention to detail'
              },
              {
                icon: Clock,
                title: 'Fresh Daily',
                desc: 'Sweets prepared fresh every morning for the best taste'
              }
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="w-14 h-14 rounded-full gold-gradient mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full gold-gradient mx-auto mb-6 flex items-center justify-center shadow-elevated">
              <span className="text-4xl font-display font-bold text-primary-foreground">RK</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Raja Kumar
            </h3>
            <p className="text-primary font-medium mb-4">Founder & Owner</p>
            <p className="text-muted-foreground leading-relaxed">
              "My father taught me that sweets are not just food – they are emotions, 
              celebrations, and memories. At Vandana Sweets, we don't just make sweets, 
              we create moments of joy. Every piece that leaves our kitchen carries our 
              family's blessing and commitment to quality."
            </p>
            <p className="text-muted-foreground mt-4">
              — Serving Katihar since 1995
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Visit Our Shop
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Come experience the authentic taste of our handcrafted sweets. 
            We're located near Hanuman Mandir in Mirchaibari, Katihar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg">
                Get Directions
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:7488774336">
              <Button variant="outline" size="lg">
                Call: 7488774336
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
