import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import "./App.css";
import {
  Button,
  CartSolidIcon,
  SearchOutLineIcon,
  HeartIcon,
  XOutlineIcon,
  TrashSolidIcon,
} from "./components";

const CartContext = createContext();

const TestComponent = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* <Button primary onClick={(e) => setCount(count + 1)}>
        {count}
      </Button> */}

      <Button
        primary
        onClick={(e) => setNumbers((prev) => prev.filter((n) => n % 2 === 0))}
      >
        Even numbers only
      </Button>

      {numbers && numbers.map((n, i) => <div key={i}>{n}</div>)}
    </div>
  );
};

const Product = {
  imageUrl:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  name: "Mens Casual Premium Slim Fit T-Shirts",
  category: "men's shirt",
  description:
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  price: "22.9",
};

const Header = () => {
  const { setIsOpen } = useContext(CartContext);

  const openCart = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <header className="flex items-center justify-between w-full h-16 px-6 shadow-lg bg-gradient-to-r from-gray-200">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-600">
        e-Store
      </h1>
      <div>
        <a href="#" onClick={openCart}>
          <CartSolidIcon className="w-6 h-6 text-gray-600" />
        </a>
      </div>
    </header>
  );
};

const AppLayout = ({ children }) => {
  return <div className="relative min-h-screen bg-gray-100">{children}</div>;
};

const Footer = () => {
  return (
    <footer className="py-2">
      <p className="text-xs font-semibold text-center text-green-900">
        &copy; 2021 e-Store Inc.
      </p>
    </footer>
  );
};

const Page = ({ title, children }) => {
  return (
    <main className="w-full p-6">
      <h2 className="mb-4 text-2xl font-semibold text-gray-700">{title}</h2>
      {children}
    </main>
  );
};

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

const ProductSearch = ({ searchText, setSearchText }) => {
  const [filter, setFilter] = useState("");

  const searchProduct = (e) => {
    e.preventDefault();
    setSearchText(filter);
  };

  return (
    <form className="relative" onSubmit={searchProduct}>
      <div className="absolute inset-y-0 flex items-center left-3">
        <SearchOutLineIcon className="w-6 h-6 text-gray-600" />
      </div>
      <input
        type="text"
        className="w-full py-3 pl-12 pr-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-40"
        placeholder="Search product..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </form>
  );
};

const ProductCard = ({
  product: { id, image, title, category, description, price },
}) => {
  const { setIsOpen, dispatch } = useContext(CartContext);

  const addToCart = (e) => {
    // const index = items.findIndex((item) => item.id === id);
    // if (index !== -1) {
    //   setItems((items) => [
    //     ...items.slice(0, index),
    //     { ...items[index], quantity: items[index].quantity + 1 },
    //     ...items.slice(index + 1),
    //   ]);
    // } else {
    //   setItems((items) => [...items, { id, title, image, price, quantity: 1 }]);
    // }

    dispatch({ type: "add", payload: { id, title, image, price } });

    setIsOpen(true);
  };

  return (
    <div className="w-auto rounded-md shadow-md bg-gray-50">
      <div className="flex justify-center p-4 bg-white">
        <img className="w-auto h-36" src={image} alt="Product" />
      </div>

      <div className="p-4 bg-gray-50">
        <div className="text-lg font-semibold leading-snug text-gray-800">
          {title}
        </div>
        <div className="text-sm text-gray-500">{category}</div>
        <div className="mt-3 leading-tight text-gray-700">{description}</div>
        <div className="flex items-center justify-between mt-5 text-gray-800">
          <div className="text-base font-semibold">$ {price}</div>
          <div className="flex items-center space-x-2">
            <a href="#" className="text-red-600 focus:outline-none">
              <HeartIcon className="w-6 h-6 text-red-600" />
            </a>
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 text-sm bg-green-600 rounded-full shadow-md hover:bg-green-500 focus:outline-none focus:ring-green-400 focus:ring-1 text-gray-50"
              onClick={addToCart}
            >
              <CartSolidIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   setLoading(true);

  //   fetch(`http://localhost:4000/products?description_like=${searchText}`)
  //     .then((response) => response.json())
  //     .then((products) => setProducts(products))
  //     .catch((err) => setError(err))
  //     .finally(() => setLoading(false));
  // }, [searchText]);

  const { data: products, loading, error } = useFetch(`http://localhost:4000/products?description_like=${searchText}`)

  return (
    <>
      <ProductSearch searchText={searchText} setSearchText={setSearchText} />

      <div className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        {error && (
          <div className="col-span-12 p-6 text-red-500 rounded-lg shadow-md bg-gray-50">
            Unable to load data. Ensure the API is up and configured to run
            based on the address shown.
          </div>
        )}
        {loading && <p className="text-lg font-semibold">Loading...</p>}
        {!loading &&
          products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

const Sidebar = () => {
  const { setIsOpen, items } = useContext(CartContext);

  const closeCart = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <aside className="fixed inset-y-0 right-0 z-10 w-11/12 h-full sm:w-96">
      <div className="w-full h-full px-5 py-4 bg-white border-l-2 shadow-lg">
        <div className="flex justify-end">
          <a
            href="#"
            className="flex-none text-gray-600 hover:text-gray-800"
            onClick={closeCart}
          >
            <XOutlineIcon className="w-6 h-6" />
          </a>
        </div>
        <h3 className="mt-2 text-lg font-semibold leading-none text-gray-700">
          Your Cart
        </h3>
        <div className="mt-4 divide-y-2">
          {items &&
            items.length > 0 &&
            items.map((item) => <CartItem key={item.id} item={item} />)}
        </div>
        {items && items.length > 0 ? (
          <button
            type="button"
            className="flex items-center justify-center w-full h-10 mt-4 space-x-2 text-sm bg-green-600 rounded-md shadow-md hover:bg-green-500 focus:outline-none text-gray-50"
          >
            <span>Check out</span>
          </button>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </aside>
  );
};

const CartItem = ({ item: { id, image, title, price, quantity } }) => {
  const { dispatch } = useContext(CartContext);

  const removeFromCart = (e) => {
    e.preventDefault();

    // const index = items.findIndex((item) => item.id === id);
    // if (index !== -1) {
    //   setItems((items) => [
    //     ...items.slice(0, index),
    //     ...items.slice(index + 1),
    //   ]);
    // }

    dispatch({ type: "remove", payload: { id } });
  };

  return (
    <div className="flex items-center">
      <div className="flex justify-center p-4">
        <img className="w-24 h-auto" src={image} alt="Product" />
      </div>
      <div className="flex-auto space-y-2">
        <div className="text-base text-gray-700 sm:text-sm">{title}</div>
        <div>
          <div className="text-sm text-gray-600 sm:text-xs">
            Quantity: {quantity}
          </div>
          <div className="text-sm font-semibold text-gray-700 sm:text-xs">
            $ {quantity * price}
          </div>
        </div>
      </div>
      <div>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-800"
          onClick={removeFromCart}
        >
          <TrashSolidIcon className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

const itemsReducer = (
  items,
  { type, payload: { id, title, image, price } }
) => {
  const index = items.findIndex((item) => item.id === id);
  switch (type) {
    case "add":
      if (index !== -1) {
        return [
          ...items.slice(0, index),
          { ...items[index], quantity: items[index].quantity + 1 },
          ...items.slice(index + 1),
        ];
      } else {
        return [...items, { id, title, image, price, quantity: 1 }];
      }
    case "remove":
      if (index !== -1) {
        return [...items.slice(0, index), ...items.slice(index + 1)];
      }
    default:
      throw new Error();
  }
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, dispatch] = useReducer(itemsReducer, []);

  return (
    <CartContext.Provider value={{ setIsOpen, items, dispatch }}>
      <AppLayout>
        <Header />
        {isOpen && <Sidebar />}
        <Page title="Products">
          <ProductList />
        </Page>
        <Footer />
      </AppLayout>
    </CartContext.Provider>
  );
}

export default App;

// OTHER CODE

// const [count, setCount] = useState(0);

// const onDownload = (e) => {
//   console.log("Clicked Download");
// };

{
  /* <div className="flex space-x-2">
        <ProductCard product={Product} />
        <Button
          icon={<UploadIcon />}
          onClick={(e) => console.log("Upload clicked")}
        >
          Upload
        </Button>
        <Button>Save</Button>
      </div> */
}

{
  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="font-bold">Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header> */
}
