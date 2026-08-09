import { useProducts } from "../context/ProductContext";

import Card from "../components/Card";

function ProductsPage() {
  const products = useProducts();
  return (
    <div className="flex justify-between items-center gap-x-40">
      <div className="w-full flex flex-wrap justify-between">
        {!products.length && <p>Loading...</p>}
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
