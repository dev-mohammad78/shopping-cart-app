import { Link } from "react-router-dom";

import { productsQuantity, shortenText } from "../helper/helper";
import { FiShoppingCart, FiTrash } from "react-icons/fi";
import { useCart } from "../context/CartContext";

function Card({ product }) {
  const { id, image, title, price, rating } = product;

  const { state, dispatch } = useCart();

  const quantity = productsQuantity(state, id);

  const clickHandler = (type) => {
    dispatch({ type, payload: product });
  };

  return (
    <div className="w-full md:w-[270px] mx-1 md:mx-3 p-5 flex md:flex-col justify-start md:justify-end bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg shadow-[var(--shadow-md)]">
      <Link to={`/products/${id}`} className="flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-[80px] md:w-[150px] object-contain md:h-[180px]"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between items-start ml-5 md:ml-0">
        <h3 className="mt-5 text-md font-semibold ">{shortenText(title)}</h3>

        <p className="mt-3 text-[var(--primary)] font-bold">{price} $</p>

        {/* footer */}
        <div className="mt-1 w-full ">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <span>⭐</span>
              <p>{rating.rate}</p>
              <p>({rating.count})</p>
            </div>
            <div className="flex items-center ">
              {quantity === 1 && (
                <button
                  onClick={() => clickHandler("REMOVE_FROM_CART")}
                  className="btn border border-[var(--primary)] p-2 rounded-lg cursor-pointer"
                >
                  <FiTrash className="text-[var(--primary)] font-bold text-lg" />
                </button>
              )}

              {quantity > 1 && (
                <button
                  onClick={() => clickHandler("DECREASE_QUANTITY")}
                  className="btn border border-[var(--primary)] text-[var(--primary)] font-bold p-2 rounded-lg cursor-pointer"
                >
                  -
                </button>
              )}
              {!!quantity && (
                <span className="mx-4 md:mx-2 text-[var(--primary)] font-bold">
                  {quantity}
                </span>
              )}

              {quantity === 0 ? (
                <button
                  onClick={() => clickHandler("ADD_TO_CART")}
                  className="btn border border-[var(--primary)] p-2 rounded-lg cursor-pointer"
                >
                  <FiShoppingCart className="text-[var(--primary)] font-bold text-lg" />
                </button>
              ) : (
                <button
                  onClick={() => clickHandler("INCREASE_QUANTITY")}
                  className="btn border border-[var(--primary)] text-[var(--primary)] font-bold p-2 rounded-lg cursor-pointer"
                >
                  +
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
