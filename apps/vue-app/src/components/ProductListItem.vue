<template>
  <div class="w-auto overflow-hidden rounded-lg shadow-md bg-gray-50">
    <div class="flex justify-center p-4 bg-white">
      <img class="w-auto h-36" :src="product.image" alt="Product" />
    </div>

    <div class="p-4 bg-gray-50">
      <div class="text-lg font-semibold leading-snug text-gray-800">
        {{ product.title }}
      </div>
      <div class="text-sm text-gray-500">{{ product.category }}</div>
      <div class="mt-3 leading-tight text-gray-700">
        {{ product.description }}
      </div>
      <div class="flex items-center justify-between mt-5 text-gray-800">
        <div class="text-base font-semibold">$ {{ product.price }}</div>
        <div class="flex items-center space-x-2">
          <a href="#" class="text-red-600 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-red-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <button
            type="button"
            class="flex items-center justify-center w-10 h-10 text-sm bg-green-600 rounded-full shadow-md  hover:bg-green-500 focus:outline-none focus:ring-green-400 focus:ring-1 text-gray-50"
            @click="addToCart(product)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed } from "vue";
import { mapActions } from "vuex";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["addToCart"]),
  },
  setup() {
    // let cartItems = inject("cartItems");

    // let addToCart = () => {
    //   const cartItem = product.target;
    //   console.log(cartItem)
    //   console.log(cartItems);
    // };

    return {
      // cartItems,
      // addToCart
    };
  },
};
</script>
