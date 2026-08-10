import { useProducts } from "../context/ProductContext";

import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";

function ProductsPage() {
  const products = useProducts();
  return (
    <div className="flex justify-between gap-x-40">
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-3 gap-2">
        {!products.length
          ? Array.from({ length: 6 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          : products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
      </div>

      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
