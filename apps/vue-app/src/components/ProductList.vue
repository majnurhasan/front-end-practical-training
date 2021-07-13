<template>
  <div
    v-if="loading"
    class="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3"
  >
    <ProductListItemSkel />
  </div>
  <div v-else class="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3">
    <ProductListItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { inject } from "vue";
import ProductListItem from "./ProductListItem.vue";
import ProductListItemSkel from "./ProductListItemSkel.vue";

export default {
  components: { ProductListItem, ProductListItemSkel },
  setup() {
    const loading = inject("loading");
    const products = inject("products");

    return {
      loading,
      products,
    };
  },
};
</script>
