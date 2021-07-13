<template>
  <div class="p-6 m-2 border shadow">
    <h1 class="text-xl font-semibold">{{ title }}</h1>

    <div class="mb-6">
      <slot />
    </div>

    <div>
      <MyButton @click="count++">{{ count }}</MyButton>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated, ref } from "vue";
import MyButton from "./MyButton.vue";

export default {
  name: "MyComponent",
  components: { MyButton },
  emits: ["show-title"],
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const count = ref(0);
    onMounted(() => {
      console.log("Mounted");
    });
    onUnmounted(() => {
      console.log("Unmounted");
    });
    onUpdated(() => {
      console.log("Updated");
    });
    return {
      count,
      showTitle() {
        emit("show-title", props.title);
      },
    };
  },
};
</script>
