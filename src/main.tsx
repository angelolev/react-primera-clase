import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page.tsx";
import ProductDetailPage from "./pages/product-detail-page.tsx";
import { ShoppingCartProvider } from "./context/index.tsx";
import LoginPage from "./pages/login-page.tsx";
import PrivateRoute from "./components/PrivateRoute/index.tsx";
import DashboardPage from "./pages/dashboard-page.tsx";
import { AuthProvider } from "./context/auth.tsx";

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
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    element: <PrivateRoute />, // This wraps all private routes
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  // <ShoppingCartProvider>
  // </ShoppingCartProvider>
);
