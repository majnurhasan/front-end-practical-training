const url = "http://localhost:4000/products";

const getProducts = async () => {
  const response = await fetch(url);
  const result = await response.json();

  return result;
};

const addProduct = async (product) => console.log("addProduct", product);

const updateProduct = async (id, product) =>
  console.log("updateProduct", product);

export { addProduct, getProducts, updateProduct };
// export default let = "Products";

// export default () => {
//   getProducts, addProduct, updateProduct;
// };
