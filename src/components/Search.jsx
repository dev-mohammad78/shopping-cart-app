import SearchInput from "./SearchInput";

function Search({ setQuery, redirectToProducts = false }) {
  return (
    <div className="w-full flex justify-between items-center bg-[var(--bg-secondary)] px-8 py-3">
      <div className="md:ml-4">
        <h2 className="text-4xl font-semibold">
          Discover Your <br />
          Perfect
          <span className="text-[var(--primary)] ml-2">Product</span>
        </h2>

        <p className="my-2 text-[var(--text-muted)]">
          Find the best items with unbeatable prices.
        </p>

        <div className="mt-6">
          <SearchInput
            setQuery={setQuery}
            redirectToProducts={redirectToProducts}
          />
        </div>
      </div>

      <div className="hidden md:block">
        <img src="/src/assets/bag.webp" alt="bag" />
      </div>
    </div>
  );
}

export default Search;
