import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Portfolio from "@/pages/Portfolio";
import Blogs from "@/pages/Blogs";
import BlogDetail from "@/pages/BlogDetail";
import ProjectDetail from "@/pages/ProjectDetail";
import BrandingService from "@/pages/BrandingService";
import MarketingService from "@/pages/MarketingService";
import WebDevelopment from "@/pages/WebDevelopment";
import AppDevelopment from "@/pages/AppDevelopment";
import MediaProduction from "@/pages/MediaProduction";
import ScrollToTop from "@/components/ScrollToTop";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/blog/:id" component={BlogDetail} />
      <Route path="/service/branding" component={BrandingService} />
      <Route path="/service/marketing" component={MarketingService} />
      <Route path="/service/web-development" component={WebDevelopment} />
      <Route path="/service/app-development" component={AppDevelopment} />
      <Route path="/service/media" component={MediaProduction} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
