<template>
  <form class="relative" @submit.prevent="searchProduct(filter)">
    <div class="absolute inset-y-0 flex items-center left-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-gray-600"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <input
      type="text"
      class="w-full py-3 pl-12 pr-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-40"
      placeholder="Search product..."
      v-model="filter"
    />
  </form>
</template>

<script>
import { inject, ref } from "vue";

export default {
  setup() {
    const filter = ref("");
    const searchProduct = inject("searchProduct");

    return {
      filter,
      searchProduct,
    };
  },
};
</script>
