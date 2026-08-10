import { useProducts } from "../context/ProductContext";

import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";
import Categories from "../components/Categories";

function ProductsPage() {
  const products = useProducts();
  return (
    <div className="w-full flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-3/4 p-1 md:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {!products.length
          ? Array.from({ length: 6 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          : products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
      </div>

      <Categories />
    </div>
  );
}

export default ProductsPage;
