import { IoSearchOutline } from "react-icons/io5";

function Search() {
  return (
    <div className="w-full flex justify-between items-center bg-[var(--bg-secondary)] px-8 py-3">
      <div className="md:ml-4">
        <h2 className="text-4xl font-semibold">
          Discover Your <br /> Perfect{" "}
          <span className="text-[var(--primary)]">Product</span>
        </h2>
        <p className="my-2 text-[var(--text-muted)]">
          Find the best items with unbeatable prices.
        </p>
        {/* Search Input */}
        <div className="flex items-center gap-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-primary)] p-2 mt-6">
          <span className="text-lg ">
            <IoSearchOutline className="text-[var(--text-muted)]" />
          </span>
          <input
            className="max-w-70 outline-none focus:outline-none focus:ring-0"
            type="text"
            placeholder="Search for products..."
          />
          <button className="bg-[var(--primary)] rounded-md px-4 py-2 text-[var(--text-white)] cursor-pointer">
            Search
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          src="/src/assets/bag.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default Search;
