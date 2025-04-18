import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import CreateVideo from "./pages/CreateVideo";
import MyVideos from "./pages/MyVideos";
import NotFound from "./pages/NotFound";

import { MainLayout } from "./layouts/MainLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main website routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
          </Route>
          
          {/* Dashboard routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="create" element={<CreateVideo />} />
            <Route path="my-videos" element={<MyVideos />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
