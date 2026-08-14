import { IoSwapVertical } from "react-icons/io5";

function Sort({ setQuery, sort }) {
  const sortOptions = [
    { label: "Default", value: "" },
    { label: "Lowest Price", value: "price-low" },
    { label: "Highest Price", value: "price-high" },
    { label: "Highest Rate", value: "rating-high" },
    { label: "Lowest Rate", value: "rating-low" },
  ];

  const sortHandler = (value) => {
    setQuery((query) => ({
      ...query,
      sort: value,
    }));
  };

  return (
    <div className="w-full flex items-center gap-x-4 py-6 overflow-hidden">
      {/* title */}
      <div className="flex shrink-0 items-center gap-x-2">
        <IoSwapVertical className="text-xl text-[var(--text-muted)]" />

        <span className="text-sm font-semibold text-[var(--text-primary)]">
          Sort by:
        </span>
      </div>

      {/* options */}
      <div className="flex items-center gap-x-5 overflow-x-auto scrollbar-hide">
        {sortOptions.map((option) => (
          <span
            key={option.value}
            onClick={() => sortHandler(option.value)}
            className={`shrink-0 cursor-pointer whitespace-nowrap text-sm transition-colors ${
              sort === option.value
                ? "font-semibold text-[var(--primary)]"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Sort;