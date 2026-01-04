import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Our Sweets Collection
          </h1>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Handcrafted with love, pure ghee, and finest ingredients
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}

        {/* Bulk Order CTA */}
        <div className="mt-16 bg-muted/50 rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">
            Need Bulk Orders?
          </h3>
          <p className="text-muted-foreground mb-4 max-w-md mx-auto">
            Special rates for weddings, festivals, and corporate events. 
            Contact us for customized orders!
          </p>
          <a 
            href="tel:7488774336" 
            className="inline-flex items-center gap-2 gold-gradient text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-soft hover:shadow-card transition-all"
          >
            Call: 7488774336
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
