import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoSearchOutline } from "react-icons/io5";

import { createQueryObject } from "../helper/helper";

function SearchInput({ setQuery, redirectToProducts = false }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchHandler = () => {
    if (!search) return;

    if (redirectToProducts) {
      navigate(`/products?search=${encodeURIComponent(search)}`);
      return;
    }

    setQuery((query) => createQueryObject(query, { search }));
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
