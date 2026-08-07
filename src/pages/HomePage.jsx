import { useProducts } from "../context/ProductContext";

function HomePage() {
  const products = useProducts();
  console.log(products);
  
  return <div>HomePage</div>;
}

export default HomePage;
