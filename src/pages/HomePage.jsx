import { Link } from "react-router-dom";

import { useProducts } from "../context/ProductContext";
import { shortenText } from "../helper/helper";
import { IoIosArrowForward } from "react-icons/io";

import Card from "../components/Card";

function HomePage() {
  const products = useProducts();

  return (
    <div className="flex justify-between items-center gap-x-40">
      <div className="w-full p-4">
        {/* header */}
        <div className="flex justify-between items-center p-2">
          <h2 className="text-lg text-[var(--text-primary)] font-semibold">
            Featured Products
          </h2>
          <div className="flex items-center">
            <Link to="/products" className="text-sm text-[var(--text-primary)]">
              View All
            </Link>
            <span className="text-sm text-[var(--text-primary)] ml-1">
              <IoIosArrowForward />
            </span>
          </div>
        </div>

        {/* products */}
        <div className="flex justify-between items-center gap-x-4 w-full p-3">
          {products.slice(0, 3).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div>Sidebar</div>
    </div>
  );
}

export default HomePage;
