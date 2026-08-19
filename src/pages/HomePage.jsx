import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

import { IoIosArrowForward } from "react-icons/io";

import { getTopRatedProduct, shortenText } from "../helper/helper";
import Card from "../components/Card";
import Search from "../components/Search";
import Categories from "../components/Categories";
import PromoBanner from "../components/PromoBanner";

function HomePage() {
  const products = useProducts();
  const featuredProducts = products.slice(0, 3);
  

  const featuredIds = featuredProducts.map((product) => product.id);

  const promotionalProduct = getTopRatedProduct(products, featuredIds);

  return (
    <div>
      <Search />
      <div className="w-full flex flex-col md:flex-row  justify-between items-start md:mt-5">
        <div className="w-full md:w-3/4 p-4 order-2 lg:order-1">
          {/* header */}
          <div className="flex justify-between items-center p-2">
            <h2 className="text-lg text-[var(--text-primary)] font-semibold">
              Featured Products
            </h2>
            <div className="flex items-center">
              <Link
                to="/products"
                className="text-sm text-[var(--text-primary)]"
              >
                View All
              </Link>
              <span className="text-sm text-[var(--text-primary)] ml-1">
                <IoIosArrowForward />
              </span>
            </div>
          </div>

          {/* products */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full p-3">
            {products.slice(0, 3).map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
        <PromoBanner product={promotionalProduct} />
      </div>
    </div>
  );
}

export default HomePage;
