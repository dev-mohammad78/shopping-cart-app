import { Link } from "react-router-dom";

import { useProducts } from "../context/ProductContext";
import { shortenText } from "../helper/helper";
import { IoIosArrowForward } from "react-icons/io";

import Card from "../components/Card";
import Search from "../components/Search";

function HomePage() {
  const products = useProducts();

  return (
    <div>
      <Search />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full p-4 flex-1">
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-x-4 w-full p-3">
            {products.slice(0, 3).map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div>Sidebar</div>
      </div>
    </div>
  );
}

export default HomePage;
