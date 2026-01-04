import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Index: React.FC = () => {
  const popularProducts = products.filter(p => p.isPopular).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
            <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-sm font-medium">
              ✨ Authentic Indian Sweets Since 1995
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Vandana Sweets
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Experience the authentic taste of traditional Indian sweets, 
              handcrafted with pure desi ghee and finest ingredients by Raja Kumar & family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/products">
                <Button variant="hero" size="xl">
                  Explore Sweets
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:7488774336">
                <Button variant="heroOutline" size="xl">
                  Call to Order
                </Button>
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 pt-6 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1">
                <span>•</span>
                <span>1000+ Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 md:py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Pure Ingredients', desc: '100% Desi Ghee' },
              { icon: Award, title: 'Quality Assured', desc: 'Fresh Daily' },
              { icon: Truck, title: 'Free Delivery', desc: 'Above ₹500' },
              { icon: Star, title: 'Best Taste', desc: 'Since 1995' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft">
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-primary font-medium">Customer Favorites</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Popular Sweets
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Our most loved sweets, handpicked by thousands of happy customers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products">
              <Button size="lg">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="text-primary font-medium">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Three Decades of Sweet Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 1995 by Raja Kumar, Vandana Sweets has been serving the finest 
                traditional Indian sweets to Katihar and beyond. What started as a small 
                family shop near Hanuman Mandir has grown into a beloved destination for 
                authentic sweets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every sweet we make carries our commitment to quality – using only pure 
                desi ghee, fresh milk, and premium dry fruits. Our recipes have been 
                passed down through generations, preserving the authentic taste that 
                our customers love.
              </p>
              <Link to="/about">
                <Button variant="outline">
                  Know More About Us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800"
                  alt="Traditional Indian Sweets"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card">
                <div className="text-3xl font-display font-bold text-primary">29+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="hero-gradient rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1920')] bg-cover bg-center opacity-5"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                Planning a Celebration?
              </h2>
              <p className="text-primary-foreground/90 text-lg">
                Order in bulk for weddings, festivals, or corporate events. 
                Special discounts available on large orders!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:7488774336">
                  <Button variant="hero" size="lg">
                    Call: 7488774336
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="heroOutline" size="lg">
                    Send Enquiry
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
