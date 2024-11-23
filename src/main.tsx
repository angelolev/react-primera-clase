import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page.tsx";
import ProductDetailPage from "./pages/product-detail-page.tsx";
import { ShoppingCartProvider } from "./context/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products/:id",
    element: <ProductDetailPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <ShoppingCartProvider>
    <RouterProvider router={router} />
  </ShoppingCartProvider>
);
