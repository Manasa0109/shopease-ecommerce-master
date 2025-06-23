
import { Button } from "@/components/ui/button";

interface HeroProps {
  onShopNow: () => void;
}

const Hero = ({ onShopNow }: HeroProps) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to ShopEase
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
            Discover amazing products at unbeatable prices. Your one-stop shop for everything you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              onClick={onShopNow}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg transition-all hover:scale-105"
            >
              Shop Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 text-lg transition-all hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-gray-50" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
