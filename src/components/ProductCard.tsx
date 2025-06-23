
import { useState } from "react";
import { Product } from "../types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    onAddToCart(product);
    setIsLoading(false);
  };

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              ★ {product.rating}
            </span>
          </div>
          {product.stock < 10 && (
            <div className="absolute top-4 left-4">
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Only {product.stock} left!
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="mb-2">
            <span className="text-sm text-blue-600 font-medium">{product.category}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            <span className="text-sm text-gray-500">
              {product.reviews} reviews
            </span>
          </div>
          
          <Button
            onClick={handleAddToCart}
            disabled={isLoading || product.stock === 0}
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300"
          >
            {isLoading ? "Adding..." : product.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
