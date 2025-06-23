
import { useState } from "react";
import { ShoppingCart, User, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthModal from "./AuthModal";

interface NavigationProps {
  currentView: "home" | "shop" | "cart";
  setCurrentView: (view: "home" | "shop" | "cart") => void;
  cartItemsCount: number;
  isLoggedIn: boolean;
  user: { name: string; email: string } | null;
  onLogin: () => void;
  onLogout: () => void;
}

const Navigation = ({
  currentView,
  setCurrentView,
  cartItemsCount,
  isLoggedIn,
  user,
  onLogin,
  onLogout
}: NavigationProps) => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
              className="flex-shrink-0 cursor-pointer"
              onClick={() => setCurrentView("home")}
            >
              <h1 className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                ShopEase
              </h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button
                  onClick={() => setCurrentView("home")}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentView === "home"
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </button>
                <button
                  onClick={() => setCurrentView("shop")}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentView === "shop"
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <Search className="w-4 h-4 mr-2" />
                  Shop
                </button>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* User Account */}
              {isLoggedIn && user ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 hidden sm:block">
                    Welcome, {user.name}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onLogout}
                    className="text-xs"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAuthModal(true)}
                  className="flex items-center space-x-1"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:block">Login</span>
                </Button>
              )}

              {/* Cart */}
              <button
                onClick={() => setCurrentView("cart")}
                className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden bg-gray-50 border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => setCurrentView("home")}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                currentView === "home"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentView("shop")}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                currentView === "shop"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
              }`}
            >
              Shop
            </button>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={onLogin}
      />
    </>
  );
};

export default Navigation;
