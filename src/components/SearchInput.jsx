import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

function SearchInput({ setQuery }) {
  const [search, setSearch] = useState("");

  const searchHandler = () => {
    setQuery((query) => ({ ...query, search }));
    setSearch("");
  };

  return (
    <div className="flex justify-between border border-[var(--border-primary)] rounded-lg bg-[var(--bg-primary)] p-2">
      <div className="max-w-150 flex items-center gap-3">
        <IoSearchOutline className="text-[var(--text-muted)]" />

        <input
          className="outline-none focus:outline-none focus:ring-0"
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
      </div>

      <button
        onClick={searchHandler}
        className="bg-[var(--primary)] rounded-md px-4 py-2 text-[var(--text-white)] cursor-pointer"
      >
        Search
      </button>
    </div>
  );
}

export default SearchInput;
