import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

import { IoSearchOutline } from "react-icons/io5";

import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";
import ProductSearch from "../components/ProductSearch";
import Categories from "../components/Categories";
import Sort from "../components/Sort";

import {
  createQueryObject,
  filterProducts,
  getInitialQuery,
  searchProducts,
  sortProducts,
} from "../helper/helper";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [displayed, setDisplayed] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);

    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    finalProducts = sortProducts(finalProducts, query.sort);

    setDisplayed(finalProducts);
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <div className="w-full m-auto">
      {/* Search Input */}
      <ProductSearch setQuery={setQuery} />

      {/* Sort Product */}
      <div className="w-full flex justify-between items-center px-2 md:px-8">
        <Sort setQuery={setQuery} sort={query.sort} />
      </div>

      {/* products */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start">
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
