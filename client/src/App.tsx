import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const ProductsPage = lazy(() => import("@/pages/Products"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => (
        <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
          <Home />
        </Suspense>
      )} />
      <Route path="/products" component={() => (
        <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
          <ProductsPage />
        </Suspense>
      )} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
