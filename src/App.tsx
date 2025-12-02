// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Helmet } from "react-helmet-async";

// Layout Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Career from "@/pages/Career";

// React Query Client Instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* DEFAULT SEO */}
        <Helmet>
          <title>SuPav Solutions | Digital, IT & E-Commerce Services</title>
          <meta
            name="description"
            content="SuPav Solutions delivers modern web development, marketplace management, e-commerce onboarding, and digital growth solutions."
          />
          <meta
            name="keywords"
            content="SuPav Solutions, E-Commerce, Amazon SPN, Flipkart Seller, Web Development, IT Services, Digital Marketing"
          />
          <meta property="og:image" content="/logo.png" />
          <meta property="og:url" content="https://supavsolutions.com" />
        </Helmet>

        {/* GLOBAL LAYOUT */}
        <div className="flex flex-col min-h-screen bg-[#0A0B10] text-white">
          <Navbar />

          {/* ROUTES */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/career" element={<Career />} />
              {/* ❌ Removed NotFound route */}
            </Routes>
          </main>

          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
