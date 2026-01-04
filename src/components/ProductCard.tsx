import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        weight: product.weight
      });
    }
    setIsAdded(true);
    toast({
      title: "Added to cart!",
      description: `${quantity} × ${product.name} added successfully.`,
    });
    setTimeout(() => {
      setIsAdded(false);
      setQuantity(1);
    }, 1500);
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = `https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop`;
          }}
        />
        {product.isPopular && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Popular
          </span>
        )}
        <span className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-2 py-1 rounded-md">
          {product.weight}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.category}</p>
          <h3 className="font-display text-lg font-semibold text-foreground mt-1">{product.name}</h3>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-primary">₹{product.price}</span>
          
          {/* Quantity Selector */}
          <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-background transition-colors"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-6 text-center font-medium text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-background transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>

        <Button 
          onClick={handleAddToCart}
          variant={isAdded ? "secondary" : "cart"}
          className="w-full"
          disabled={isAdded}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
