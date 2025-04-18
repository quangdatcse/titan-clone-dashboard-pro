
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const isActive = (path: string) => location.pathname === path;

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
        <Link to="/dashboard">
          <Button className="bg-primary hover:bg-primary/90">Dashboard</Button>
        </Link>
      </div>
    </header>
  );
};
