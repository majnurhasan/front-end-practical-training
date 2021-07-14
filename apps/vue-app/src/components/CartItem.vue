<template>
  <div class="flex items-center">
    <div class="flex justify-center p-4">
      <img class="w-24 h-auto" :src="product.image" alt="Product" />
    </div>
    <div class="space-y-2">
      <div class="text-base text-gray-700 sm:text-sm">
        {{ product.title }}
      </div>
      <div>
        <div class="text-sm text-gray-600 sm:text-xs">
          Quantity: {{ product.quantity }}
        </div>
        <div class="text-sm font-semibold text-gray-700 sm:text-xs">
          $ {{ product.price }}
        </div>
      </div>
    </div>
    <div>
      <button
        class="text-gray-600 hover:text-gray-800"
        @click="deleteFromCart(product.id)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { inject } from "vue";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["deleteFromCart"]),
  },
  setup() {},
};
</script>
