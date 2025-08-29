"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster as Sonner } from "sonner";
import { useState } from "react";

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider delayDuration={150}>
        <Sonner richColors />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
}



