import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

import { FiShoppingCart, FiTruck } from "react-icons/fi";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { MdOutlineSecurity } from "react-icons/md";
import { RiRestartLine } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";

function Layout({ children }) {
  const { state } = useCart();

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

      <footer className="flex flex-col md:flex-row md:items-center justify-between gap-y-4 bg-[var(--bg-secondary)] px-4 md:px-5 py-5 md:py-9">
        <div className="flex pr-6 border-r border-[var(--border-primary)]">
          <div className="border border-[var(--border-primary)] bg-[var(--bg-primary)] rounded-lg p-3">
            <FiTruck className="text-[var(--primary)] text-3xl font-thin" />
          </div>
          <div className="flex flex-col ml-2 mt-1">
            <h4 className="font-bold text-md">Free Shipping</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              On all orders over $50
            </p>
          </div>
        </div>

        <div className="flex pr-6 border-r border-[var(--border-primary)]">
          <div className="border border-[var(--border-primary)] bg-[var(--bg-primary)] rounded-lg p-3">
            <MdOutlineSecurity className="text-[var(--primary)] text-3xl" />
          </div>
          <div className="flex flex-col ml-2 mt-1">
            <h4 className="font-bold text-md">Secure Payment</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              100% secure payment
            </p>
          </div>
        </div>

        <div className="flex pr-6 border-r border-[var(--border-primary)]">
          <div className="border border-[var(--border-primary)] bg-[var(--bg-primary)] rounded-lg p-3">
            <RiRestartLine className="text-[var(--primary)] text-3xl" />
          </div>
          <div className="flex flex-col ml-2 mt-1">
            <h4 className="font-bold text-md">30 Days Return</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              Money back guarantee
            </p>
          </div>
        </div>

        <div className="flex pr-6">
          <div className="border border-[var(--border-primary)] bg-[var(--bg-primary)] rounded-lg p-3">
            <TfiHeadphoneAlt className="text-[var(--primary)] text-3xl" />
          </div>
          <div className="flex flex-col ml-2 mt-1">
            <h4 className="font-bold text-md">24/7 Support</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              Dedicated support
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
