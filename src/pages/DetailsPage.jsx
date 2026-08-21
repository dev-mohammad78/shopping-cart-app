import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSingleProduct } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import Loader from "../components/Loader";

function DetailsPage() {
  const [showDescription, setShowDescription] = useState(false);
  const { id } = useParams();
  const product = useSingleProduct(+id);
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  if (!product) return <Loader />;

  const isInCart = state.selectedItems.some((item) => item.id === product.id);

  const { image, title, description, price, rating } = product;

  const clickHandler = (type) => {
    dispatch({ type, payload: product });
  };

  return (
    <div className="flex flex-col sm:flex-row items-start gap-x-10 my-7">
      {/* image */}
      <div className="flex justify-center w-full sm:w-1/3 md:border border-[var(--border-primary)] rounded-lg p-10 bg-[var(--bg-tertiary)]">
        <img src={image} alt={title} className="w-[250px] object-contain" />
      </div>
      {/* content */}
      <div className="p-4 md:p-0 mr-10 w-full sm:w-2/3">
        <h3 className="text-xl font-bold ">{title}</h3>

        <div
          onClick={() => setShowDescription((prev) => !prev)}
          className="my-4 text-[var(--text-secondary)] text-lg cursor-pointer"
        >
          <p>
            {showDescription ? description : `${description.slice(0, 120)}...`}
          </p>

          <span className="text-[var(--primary)] text-sm font-semibold">
            {showDescription ? "Show less" : "Read more"}
          </span>
        </div>

        <span className="text-[var(--text-secondary)] text-md flex items-center gap-x-3">
          <p>⭐ {rating.rate} |</p>
          <p>({rating.count}) left of this product</p>
        </span>

        <p className="my-5 text-[var(--primary)] text-3xl font-bold">
          {price} $
        </p>

        {/* Btns */}
        <div className="flex flex-col md:flex-row gap-y-4 justify-evenly">
          <button
            className="flex items-center justify-center gap-x-2 px-6 py-3 md:py-2 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-md cursor-pointer order-2 md:order-1"
            onClick={() => navigate(-1)}
          >
            See all product
          </button>

          <button
            onClick={() =>
              clickHandler(isInCart ? "REMOVE_FROM_CART" : "ADD_TO_CART")
            }
            className="flex items-center justify-center gap-x-2 px-6 py-3 md:py-2 rounded-md cursor-pointer order-1 bg-[var(--primary)] text-[var(--text-white)]"
          >
            {isInCart ? "Remove from cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
