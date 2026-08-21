import { FiClock } from "react-icons/fi";
import { shortenText } from "../helper/helper";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const PromoBanner = ({ product }) => {
  if (!product) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 via-white to-[orange-100] p-6 w-full md:mx-4 mt-4 md:mt-6">
      {/* Badge */}
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[var(--primary)] shadow-[var(--shadow-sm)]">
        <FiClock />
        LIMITED TIME OFFER
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-xl font-bold leading-tight text-[var(--text-primary)]">
          Upgrade Your <span className="text-[var(--primary)]">Style</span>
        </h2>

        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
          Exclusive deals on our top collection.
        </p>

        {/* Discount */}
        <div className="mt-3 inline-block rounded-xl border border-dashed border-orange-300 bg-white/70 px-4 py-2">
          <span className="block text-xs text-[var(--text-secondary)]">
            UP TO
          </span>

          <span className="text-xl font-bold text-[var(--primary)]">30%</span>

          <span className="ml-1 text-sm font-bold text-[var(--text-primary)]">
            OFF
          </span>
        </div>

        {/* Product info */}
        <div className="mt-4">
          <p className="line-clamp-1 text-sm font-semibold text-[var(--text-primary)]">
            {shortenText(product.title)}
          </p>

          <div className="mt-1 flex items-center gap-2">
            <span className="font-bold text-[var(--primary)]">
              ${product.price}
            </span>

            <span className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
              ⭐{product.rating.rate}
            </span>
          </div>
        </div>

        {/* Button */}
        <Link to={`/products/${product.id}`}>
          <button className="mt-7 rounded-lg bg-[var(--bg-primary)] px-4 py-2.5 text-sm font-semibold text-[var(--primary)] cursor-pointer border border-[var(--primary)]">
            <IoIosArrowForward />
          </button>
        </Link>
      </div>

      {/* Product Image */}
      <div className="absolute top-2 md:top-10 right-2 flex h-full w-[48%] items-end justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-40 object-contain drop-shadow-xl"
        />
      </div>

      {/* Decorative Circle */}
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[var(--primary)]/30" />
    </div>
  );
};

export default PromoBanner;
