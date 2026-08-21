import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

import { IoSearchOutline } from "react-icons/io5";

import Card from "../components/Card";
import ProductSearch from "../components/ProductSearch";
import Categories from "../components/Categories";
import Sort from "../components/Sort";

import {
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
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);

    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    finalProducts = sortProducts(finalProducts, query.sort);

    setDisplayed(finalProducts);
  }, [query]);

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
          {displayed.length ? (
            displayed.map((product) => (
              <Card key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full min-h-100 flex flex-col items-center justify-center text-center px-4">
              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[var(--bg-tertiary)] mb-5">
                <IoSearchOutline className="text-4xl text-[var(--primary)]" />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
                No Products Found
              </h2>

              {/* Description */}
              <p className="max-w-md mt-2 text-[var(--text-muted)]">
                We couldn't find any products matching your search. Try
                searching for something else.
              </p>

              {/* Button */}
              <button
                onClick={() => setQuery({})}
                className="mt-6 px-5 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--text-white)] cursor-pointer hover:opacity-90 transition"
              >
                View All Products
              </button>
            </div>
          )}
        </div>

        <Categories setQuery={setQuery} category={query.category} />
      </div>
    </div>
  );
}

export default ProductsPage;
