import { FiShoppingCart } from "react-icons/fi";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { useCart } from "../context/CartContext";
import { Link, NavLink } from "react-router-dom";

function Layout({ children }) {
  const { state } = useCart();
  console.log(state);

  return (
    <>
      <header className="w-full h-18 px-2 py-3 flex items-center justify-between border-b border-[var(--border-primary)] bg-[var(--bg-primary)]">
        <Link to="/" className="flex items-center">
          <HiMiniShoppingBag className="text-[var(--primary-hover)] text-3xl" />
          <h1 className="text-[var(--text-primary)] text-2xl font-bold ml-2">
            Shop
          </h1>
        </Link>
        <div className="hidden md:flex items-center gap-x-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav" : null)}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "nav" : null)}
          >
            Products
          </NavLink>

          <NavLink
            to="/checkout"
            className={({ isActive }) => (isActive ? "nav" : null)}
          >
            About
          </NavLink>
        </div>
        <Link
          to="/checkout"
          className="border border-[var(--border-primary)] rounded-lg p-3 relative "
        >
          <FiShoppingCart className="text-[var(--text-primary)] text-xl" />
          {!!state.counterItems && (
            <span className="absolute absolute top-[1px] right-[1px] bg-[var(--primary)] text-[var(--text-white)] w-4 h-4 leading-4 text-center text-xs rounded-lg">
              {state.counterItems}
            </span>
          )}
        </Link>
      </header>
      {children}
      <footer>footer</footer>
    </>
  );
}

export default Layout;
