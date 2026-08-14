import SearchInput from "./SearchInput";

function ProductSearch({ setQuery }) {
  return (
    <div className="md:max-w-120 my-6 ml-2 md:ml-7">
      <SearchInput setQuery={setQuery} />
    </div>
  );
}

export default ProductSearch;
