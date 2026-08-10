import { Link } from "react-router-dom";

import { shortenText } from "../helper/helper";
import { FiShoppingCart } from "react-icons/fi";

function Card({ product }) {
  console.log(product);
  const { id, image, title, price, rating } = product;

  return (
    <div className="w-[270px] mx-3 p-5 flex flex-col justify-end bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg shadow-[var(--shadow-md)]">
      <Link to={`/products/${id}`} className="flex items-center justify-center">
        <img src={image} alt={title} className="w-[150px] h-[180px]" />
      </Link>

      <h3 className="mt-5 text-md font-semibold ">{shortenText(title)}</h3>

      <p className="mt-3 text-[var(--primary)] font-bold">{price} $</p>

      <div className="mt-1 flex justify-between items-center">
        <div className="flex items-center gap-1 text-sm">
          <span>⭐</span>
          <p>{rating.rate}</p>
          <p>({rating.count})</p>
        </div>
        <span className="border border-[var(--primary)] p-2 rounded-lg cursor-pointer">
          <FiShoppingCart className="text-[var(--primary)] font-bold text-lg" />
        </span>
      </div>
    </div>
  );
}

export default Card;
