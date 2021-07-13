<template>
  <button class="px-4 py-2 text-white bg-green-600 rounded-md" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: "MyButton",
  emits: ["click"],
  setup(props, { emit }) {
    return {
      onClick(e) {
        console.log("MyButton");
        emit("click", e)
      },
    };
  },
};
</script>
