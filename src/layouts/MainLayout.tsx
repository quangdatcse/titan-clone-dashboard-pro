
import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="py-6 border-t border-border">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 TitanLabs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
