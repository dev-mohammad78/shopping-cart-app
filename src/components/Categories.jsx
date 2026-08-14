import { BiCategoryAlt } from "react-icons/bi";
import { BsGem } from "react-icons/bs";
import { IoShirtOutline } from "react-icons/io5";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { PiDress } from "react-icons/pi";

function Categories({ setQuery }) {

  const categoryHandler = (event) => {
    const category = event.target.closest("li");

    if (!category) return;

    const categoryName = category.innerText.toLowerCase();

    setQuery((query) => ({
      ...query,
      category: categoryName === "all" ? "" : categoryName,
    }));
  };

  return (
    <div className="w-full md:w-1/4 md:mt-4 p-2 border border-[var(--border-primary)] rounded-md ">
      <div className="flex items-center justify-center md:justify-start border-b border-[var(--border-primary)] gap-x-2 mb-2 p-4">
        <BiCategoryAlt className="text-[var(--primary)] font-bold" />
        <p className="text-md font-semibold">Categories</p>
      </div>
      <ul
        onClick={categoryHandler}
        className="px-4 py-2 flex flex-col gap-y-3 text-[var(--text-primary)]"
      >
        <li className="cursor-pointer block">All</li>
        <li className="flex block cursor-pointer items-center gap-x-2">
          <LiaDigitalTachographSolid />
          Electronics
        </li>
        <li className="flex block cursor-pointer items-center gap-x-2">
          <BsGem />
          Jewelery
        </li>
        <li className="flex block cursor-pointer items-center gap-x-2">
          <IoShirtOutline />
          Men's clothing
        </li>
        <li className="flex block cursor-pointer items-center gap-x-2">
          <PiDress />
          Women's clothing
        </li>
      </ul>
    </div>
  );
}

export default Categories;
