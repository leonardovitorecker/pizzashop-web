import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/routes";
import { Toaster } from "sonner";
import "./global.css";
function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
