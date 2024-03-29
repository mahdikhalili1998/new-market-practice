const shortName = (text) => {
  const makeShort = text.split(" ").slice(0, 2).join(" ");
  return makeShort;
};
const searchFinder = (products, search) => {
  if (!search) return products;
  const searcher = products.filter((item) =>
    item.title.toLowerCase().includes(search)
  );

  return searcher;
};

const categoryHandler = (products, category) => {
  if (!category) return products;
  const categoryFinder = products.filter((item) => item.category === category);
  return categoryFinder;
};

const createQuery = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...other } = currentQuery;
    return other;
  }
  if (newQuery.search === "") {
    const { search, ...other } = currentQuery;
    return other;
  }
  return {
    ...currentQuery,
    ...newQuery,
  };
};

const queryHAndler = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) {
    query.category = category;
  }
  if (search) {
    query.search = search;
  }
  return query;
};

const quantityHandler = (state, id) => {
  const index = state.selectedItem.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItem[index].quantity;
  }
};

const pluser = (item) => {
  const counterItem = item.reduce((acc, cur) => acc + cur.quantity, 0);
  const total = item
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
  return { counterItem, total };
};
const totalThisPro = (item) => console.log(item);
export {
  quantityHandler,
  shortName,
  categoryHandler,
  queryHAndler,
  createQuery,
  searchFinder,
  pluser,
  totalThisPro,
};

// item.quantity * item.price
