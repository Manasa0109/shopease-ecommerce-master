
import { useState } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import ProductCatalog from "../components/ProductCatalog";
import Cart from "../components/Cart";
import AuthModal from "../components/AuthModal";
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
  },
  {
    id: "7",
    name: "Running Shoes",
    price: 129.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description: "Comfortable running shoes for athletes",
    stock: 40,
    rating: 4.7,
    reviews: 203
  },
  {
    id: "8",
    name: "Coffee Maker",
    price: 89.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    description: "Premium coffee maker for the perfect brew",
    stock: 25,
    rating: 4.6,
    reviews: 158
  },
  {
    id: "9",
    name: "Leather Wallet",
    price: 49.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    description: "Genuine leather wallet with multiple compartments",
    stock: 60,
    rating: 4.4,
    reviews: 89
  },
  {
    id: "10",
    name: "Gaming Mouse",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    description: "High-precision gaming mouse with RGB lighting",
    stock: 35,
    rating: 4.8,
    reviews: 127
  },
  {
    id: "11",
    name: "Yoga Mat",
    price: 39.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    description: "Non-slip yoga mat for comfortable workouts",
    stock: 50,
    rating: 4.5,
    reviews: 76
  },
  {
    id: "12",
    name: "Ceramic Plant Pot",
    price: 24.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    description: "Beautiful ceramic pot perfect for indoor plants",
    stock: 80,
    rating: 4.3,
    reviews: 45
  },
  {
    id: "13",
    name: "Winter Jacket",
    price: 199.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    description: "Warm and stylish winter jacket for cold weather",
    stock: 20,
    rating: 4.7,
    reviews: 112
  },
  {
    id: "14",
    name: "Smartphone Case",
    price: 19.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8",
    description: "Protective case for your smartphone with elegant design",
    stock: 100,
    rating: 4.2,
    reviews: 234
  },
  {
    id: "15",
    name: "Basketball",
    price: 34.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
    description: "Official size basketball for indoor and outdoor play",
    stock: 45,
    rating: 4.6,
    reviews: 88
  },
  {
    id: "16",
    name: "Table Lamp",
    price: 69.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    description: "Modern table lamp with adjustable brightness",
    stock: 30,
    rating: 4.4,
    reviews: 67
  },
  {
    id: "17",
    name: "Backpack",
    price: 79.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    description: "Durable backpack perfect for travel and daily use",
    stock: 55,
    rating: 4.5,
    reviews: 145
  },
  {
    id: "18",
    name: "Jeans",
    price: 89.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    description: "Classic denim jeans with perfect fit",
    stock: 65,
    rating: 4.3,
    reviews: 189
  }
];

const Index = () => {
  const [currentView, setCurrentView] = useState<"home" | "shop" | "cart">("home");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

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

  const handleLogin = (userData: { name: string; email: string }) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  // Fixed filtering logic
  const filteredProducts = sampleProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || selectedCategory === "" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(sampleProducts.map(p => p.category))];

  const handleShopNow = () => {
    setCurrentView("shop");
    setSearchQuery(""); // Clear search when navigating to shop
    setSelectedCategory("all"); // Reset category filter
  };

  const handleViewAllProducts = () => {
    setCurrentView("shop");
    setSearchQuery(""); // Clear search when viewing all products
    setSelectedCategory("all"); // Reset category filter
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        isLoggedIn={isLoggedIn}
        user={user}
        onLogin={() => setShowAuthModal(true)}
        onLogout={handleLogout}
      />

      {currentView === "home" && (
        <>
          <Hero onShopNow={handleShopNow} />
          <FeaturedProducts
            products={sampleProducts.slice(0, 3)}
            onAddToCart={addToCart}
            onViewAll={handleViewAllProducts}
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

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Index;
