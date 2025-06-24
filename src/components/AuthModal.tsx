
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (userData: { name: string; email: string }) => void;
}

const AuthModal = ({ isOpen, onClose, onLogin }: AuthModalProps) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLoginMode) {
      // Simulate login
      if (formData.email && formData.password) {
        // Use the name from form data, or extract from email if name is empty
        const userName = formData.name || formData.email.split('@')[0];
        onLogin({
          name: userName,
          email: formData.email,
        });
        toast({
          title: "Login Successful!",
          description: `Welcome back, ${userName}!`,
        });
        onClose();
        // Reset form
        setFormData({ name: "", email: "", password: "" });
      } else {
        toast({
          title: "Error",
          description: "Please fill in all fields.",
          variant: "destructive",
        });
      }
    } else {
      // Simulate registration
      if (formData.name && formData.email && formData.password) {
        onLogin({
          name: formData.name,
          email: formData.email,
        });
        toast({
          title: "Registration Successful!",
          description: `Welcome to ShopEase, ${formData.name}!`,
        });
        onClose();
        // Reset form
        setFormData({ name: "", email: "", password: "" });
      } else {
        toast({
          title: "Error",
          description: "Please fill in all fields.",
          variant: "destructive",
        });
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">
            {isLoginMode ? "Login to ShopEase" : "Create Account"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLoginMode && (
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required={!isLoginMode}
                />
              </div>
            )}
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                {isLoginMode ? "Login" : "Create Account"}
              </Button>
              
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={onClose}
              >
                Cancel
              </Button>
            </div>
          </form>
          
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => {
                setIsLoginMode(!isLoginMode);
                setFormData({ name: "", email: "", password: "" });
              }}
              className="text-blue-600 hover:text-blue-700 text-sm"
            >
              {isLoginMode
                ? "Don't have an account? Sign up"
                : "Already have an account? Login"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthModal;
