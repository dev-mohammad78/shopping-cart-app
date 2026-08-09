import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

import { useProducts } from "../context/ProductContext";
import { shortenText } from "../helper/helper";
import { FiShoppingCart } from "react-icons/fi";

function HomePage() {
  const products = useProducts();
  console.log(products);

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
            <div
              key={product.id}
              className="border border-[var(--border-primary)] rounded-lg shadow-[var(--shadow-md)] bg-[var(--bg-primary)] p-6 w-full"
            >
              <Link
                to="/products/:id"
                className="flex items-center justify-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[150px] h-[180px] p-1"
                />
              </Link>

              <h3 className="mt-5 text-md font-semibold ">
                {shortenText(product.title)}
              </h3>

              <p className="mt-3 text-[var(--primary)] font-bold">
                {product.price} $
              </p>

              <div className="mt-1 flex justify-between items-center">
                <div className="flex items-center gap-1 text-sm">
                  <span>⭐</span>
                  <p>{product.rating.rate}</p>
                  <p>({product.rating.count})</p>
                </div>
                <span className="border border-[var(--primary)] p-2 rounded-lg cursor-pointer">
                  <FiShoppingCart className="text-[var(--primary)] font-bold text-lg" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>Sidebar</div>
    </div>
  );
}

export default HomePage;
