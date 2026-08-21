import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";
import ProductProvider from "./context/ProductContext";
import CartProvider from "./context/CartContext";
import AboutUsPage from "./pages/AboutPage";
import Layout from "./layout/Layout";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <Layout>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
