
import { Product } from "../types";
import ProductCard from "./ProductCard";

interface FeaturedProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewAll: () => void;
}

const FeaturedProducts = ({ products, onAddToCart, onViewAll }: FeaturedProductsProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check out our hand-picked selection of the best products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onViewAll}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
