import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/routes";
import { Toaster } from "sonner";
import "./global.css";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { queryClient } from "./lib/reactQuery";
import { QueryClientProvider } from "@tanstack/react-query";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop" children={null} />
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
