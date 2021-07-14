<template>
  <aside class="fixed inset-y-0 right-0 z-10 w-11/12 h-full sm:w-96">
    <div class="w-full h-full px-5 py-4 bg-white border-l-2 shadow-lg">
      <div class="flex justify-end">
        <a
          href="#"
          class="flex-none text-gray-600 hover:text-gray-800"
          v-on:click="toggleSidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
      <h3 class="mt-2 text-lg font-semibold leading-none text-gray-700">
        Your Cart
      </h3>
      <div class="mt-4 divide-y-2">
        <CartItem
          v-for="cartItem in cartItems"
          :key="cartItem.id"
          :product="cartItem"
        />
      </div>
      <button
        type="button"
        class="flex items-center justify-center w-full h-10 mt-4 space-x-2 text-sm bg-green-600 rounded-md shadow-md  hover:bg-green-500 focus:outline-none text-gray-50"
      >
        <span>Check out</span>
      </button>
    </div>
  </aside>
</template>

<script>
import { inject } from "vue";
import CartItem from "./CartItem.vue";
import { mapState } from "vuex";

export default {
  components: { CartItem },
  computed: {
    ...mapState(["cartItems"]),
  },
  setup() {
    const loading = inject("loading");
    const showSidebar = inject("showSidebar");
    const toggleSidebar = inject("toggleSidebar");
    // const products = inject("products");
    // const cartItems = inject("cartItems");

    return {
      loading,
      toggleSidebar,
      showSidebar,
    };
  },
};
</script>
