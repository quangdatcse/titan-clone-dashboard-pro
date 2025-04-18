
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, Globe, LogIn, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { signOut } from "@/services/authService";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { user } = useAuth();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const isActive = (path: string) => location.pathname === path;

  const handleAuthAction = async () => {
    if (user) {
      await signOut();
      navigate('/');
    } else {
      navigate('/auth');
    }
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-border w-full">
      <div className="flex items-center">
        <Link to="/" className="text-primary font-bold text-xl mr-12">
          TitanLabs
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/gallery"
            className={`${
              isActive("/gallery") ? "text-primary font-medium" : "text-foreground"
            } hover:text-primary transition-colors`}
          >
            Gallery
          </Link>
          <Link
            to="/pricing"
            className={`${
              isActive("/pricing") ? "text-primary font-medium" : "text-foreground"
            } hover:text-primary transition-colors`}
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className={`${
              isActive("/about") ? "text-primary font-medium" : "text-foreground"
            } hover:text-primary transition-colors`}
          >
            About
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleDarkMode}
          className="rounded-full"
        >
          {isDarkMode ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-5 w-5" />
        </Button>
        <Button onClick={handleAuthAction} className="bg-primary hover:bg-primary/90">
          {user ? (
            <>
              <LogOut className="mr-2 h-4 w-4" />
              Đăng xuất
            </>
          ) : (
            <>
              <LogIn className="mr-2 h-4 w-4" />
              Đăng nhập
            </>
          )}
        </Button>
      </div>
    </header>
  );
};
