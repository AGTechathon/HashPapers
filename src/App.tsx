// App.tsx
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Web3Provider from "@/components/providers/Web3Provider";
import Layout from "@/components/layout/Layout";
import Router from "@/routes/Router";

// Instantiate the QueryClient (if not already created elsewhere)
const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Web3Provider>
        <Layout>
          <Router />
        </Layout>
        <Toaster />
      </Web3Provider>
    </QueryClientProvider>
  );
}

export default App;
