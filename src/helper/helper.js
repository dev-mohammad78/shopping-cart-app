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

const getInitialQuery = (searchParams) => {
  const query = {};

  const search = searchParams.get("search");
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");

  if (search) query.search = search;
  if (category) query.category = category;
  if (sort) query.sort = sort;

  return query;
};

const sumProducts = (products) => {
  const counterItems = products.reduce(
    (counter, product) => counter + product.quantity,
    0,
  );

  const total = products
    .reduce((counter, product) => counter + product.price * product.quantity, 0)
    .toFixed(2);

  return { counterItems, total };
};

const productsQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};

const getTopRatedProduct = (products, excludedIds = []) => {
  const availableProducts = products.filter(
    (product) => !excludedIds.includes(product.id),
  );

  if (!availableProducts.length) return null;

  return availableProducts.reduce((best, product) => {
    return product.rating.rate > best.rating.rate ? product : best;
  });
};

export {
  shortenText,
  searchProducts,
  filterProducts,
  sortProducts,
  createQueryObject,
  getInitialQuery,
  sumProducts,
  productsQuantity,
  getTopRatedProduct,
};
