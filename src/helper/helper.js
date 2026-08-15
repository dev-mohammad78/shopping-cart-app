const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search),
  );
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter(
    (product) => product.category === category,
  );
  return filteredProducts;
};

const sortProducts = (products, sort) => {
  if (!sort) return products;

  const sortedProducts = [...products];

  switch (sort) {
    case "price-low":
      return sortedProducts.sort((a, b) => a.price - b.price);

    case "price-high":
      return sortedProducts.sort((a, b) => b.price - a.price);

    case "rating-high":
      return sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);

    case "rating-low":
      return sortedProducts.sort((a, b) => a.rating.rate - b.rating.rate);

    default:
      return products;
  }
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }

  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }

  if (newQuery.sort === "") {
    const { sort, ...rest } = currentQuery;
    return rest;
  }

  return { ...currentQuery, ...newQuery };
};

export {
  shortenText,
  searchProducts,
  filterProducts,
  sortProducts,
  createQueryObject,
};
