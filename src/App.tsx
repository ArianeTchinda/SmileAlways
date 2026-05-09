import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/Services";
import EquipePage from "./pages/Equipe";
import ContactPage from "./pages/Contact";
import UrgencesPage from "./pages/Urgences";
import BlogPage from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import MentionsLegalesPage from "./pages/MentionsLegales";
import ConfidentialitePage from "./pages/Confidentialite";
import CGVPage from "./pages/CGV";
import ServiceDetailPage from "./pages/ServiceDetail";
import AdminPage from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/equipe" element={<EquipePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/urgences" element={<UrgencesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="/confidentialite" element={<ConfidentialitePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/cgv" element={<CGVPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
