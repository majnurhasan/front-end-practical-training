<template>
  <AppLayout>
    <template #header>
      <h1 class="text-3xl font-semibold tracking-tight text-gray-600">
        e-Store
      </h1>
      <div>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-700 hover:text-gray-800"
            viewBox="0 0 20 20"
            fill="currentColor"
            v-on:click="toggleSidebar"
          >
            <path
              d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            />
          </svg>
        </a>
      </div>
    </template>

    <template #default>
      <h2 class="mb-4 text-2xl font-semibold text-gray-700">Products</h2>
      <ProductSearch />
      <ProductList />
      <div v-if="showSidebar">
        <Sidebar />
      </div>
    </template>

    <template #footer>
      <p class="text-xs font-semibold text-center text-green-900">
        &copy; 2021 e-Store Inc.
      </p>
    </template>
  </AppLayout>
</template>

<script>
import "./index.css";
import { computed, onMounted, provide, ref } from "vue";
import AppLayout from "./components/AppLayout.vue";
import ProductSearch from "./components/ProductSearch.vue";
import ProductList from "./components/ProductList.vue";
import Sidebar from "./components/Sidebar.vue";
import useFetch from "./useFetch";

export default {
  components: { AppLayout, ProductSearch, ProductList, Sidebar },
  setup() {
    // const loading = ref(false);
    // const products = ref([]);

    // const store = useStore();
    // const cartItems = ref([]);
    const showSidebar = ref(false);

    const toggleSidebar = () => {
      if (showSidebar.value == false) {
        showSidebar.value = true;
      } else {
        showSidebar.value = false;
      }
    };

    const baseUrl = "http://localhost:4000/products";
    const url = ref(baseUrl);

    const { loading, error, data: products } = useFetch(url);

    const searchProduct = async (name) => {
      url.value = name ? `${baseUrl}?title_like=${name}` : baseUrl;
    };

    provide("loading", loading);
    provide("products", products);
    provide("searchProduct", searchProduct);
    // provide("cartItems", cartItems);

    return {
      toggleSidebar,
      showSidebar,
      // addToCart: () => store.commit("addToCart"),
      // cartItems: computed(() => store.state.cartItems),
    };
  },
};
</script>
