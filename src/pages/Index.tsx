
import { useState } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import ProductCatalog from "../components/ProductCatalog";
import Cart from "../components/Cart";
import { Product, CartItem } from "../types";

// Sample product data (in real app, this would come from API)
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "High-quality wireless headphones with noise cancellation",
    stock: 15,
    rating: 4.8,
    reviews: 124
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "Track your fitness goals with this advanced smartwatch",
    stock: 23,
    rating: 4.6,
    reviews: 89
  },
  {
    id: "3",
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    description: "Comfortable and sustainable cotton t-shirt",
    stock: 45,
    rating: 4.4,
    reviews: 67
  },
  {
    id: "4",
    name: "Professional Laptop",
    price: 1299.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    description: "High-performance laptop for professionals",
    stock: 8,
    rating: 4.9,
    reviews: 156
  },
  {
    id: "5",
    name: "Designer Sunglasses",
    price: 149.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    description: "Stylish sunglasses with UV protection",
    stock: 32,
    rating: 4.3,
    reviews: 42
  },
  {
    id: "6",
    name: "Wireless Speaker",
    price: 89.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    description: "Portable wireless speaker with rich sound",
    stock: 28,
    rating: 4.5,
    reviews: 93
  }
];

const Index = () => {
  const [currentView, setCurrentView] = useState<"home" | "shop" | "cart">("home");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const filteredProducts = sampleProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(sampleProducts.map(p => p.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        isLoggedIn={isLoggedIn}
        user={user}
        onLogin={() => {
          setIsLoggedIn(true);
          setUser({ name: "John Doe", email: "john@example.com" });
        }}
        onLogout={() => {
          setIsLoggedIn(false);
          setUser(null);
        }}
      />

      {currentView === "home" && (
        <>
          <Hero onShopNow={() => setCurrentView("shop")} />
          <FeaturedProducts
            products={sampleProducts.slice(0, 3)}
            onAddToCart={addToCart}
            onViewAll={() => setCurrentView("shop")}
          />
        </>
      )}

      {currentView === "shop" && (
        <ProductCatalog
          products={filteredProducts}
          onAddToCart={addToCart}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />
      )}

      {currentView === "cart" && (
        <Cart
          items={cartItems}
          onUpdateQuantity={updateCartQuantity}
          onRemoveItem={removeFromCart}
          onContinueShopping={() => setCurrentView("shop")}
        />
      )}
    </div>
  );
};

export default Index;
