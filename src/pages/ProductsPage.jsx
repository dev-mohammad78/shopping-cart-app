import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";

import { IoSearchOutline } from "react-icons/io5";

import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";
import Categories from "../components/Categories";
import ProductSearch from "../components/ProductSearch";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    console.log(query);
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => ({ ...query, search }));
    setSearch("");
  };

  return (
    <div className="w-full m-auto">
      {/* Search Input */}
      <ProductSearch setQuery={setQuery} />

      {/* products */}
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-3/4 p-1 md:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {!displayed.length
            ? Array.from({ length: 6 }).map((_, index) => (
                <CardSkeleton key={index} />
              ))
            : displayed.map((product) => (
                <Card key={product.id} product={product} />
              ))}
        </div>

        <Categories setQuery={setQuery} />
      </div>
    </div>
  );
}

export default ProductsPage;
