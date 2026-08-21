import { createContext, useContext, useEffect, useState } from "react";

import api from "../services/config";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.error(error.message || "Error fetching products");
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

const useProducts = () => {
  return useContext(ProductContext);
};

const useSingleProduct = (id) => {
  const products = useContext(ProductContext);
  const singleProduct = products.find((product) => product.id === id);
  return singleProduct;
};

export default ProductProvider;
export { useProducts, useSingleProduct };
