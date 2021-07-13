<template>
  <div class="p-4 font-bold border shadow">
    <div class="flex">
      <div class="w-1/3">First name</div>
      <input
        type="text"
        class="p-2 border rounded-md"
        v-model="profile.firstName"
      />
    </div>
    <div class="flex">
      <div class="w-1/3">Last name</div>
      <input
        type="text"
        class="p-2 border rounded-md"
        v-model="profile.lastName"
      />
    </div>
    <button class="px-4 py-2 text-white bg-green-600 rounded-md">SAVE</button>
  </div>
</template>

<script>
export default {
  name: "MyProfile",
  emits: ["updated-profile"],
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    return {
      saveProfile() {
        emit("updated-profile", { ...props.profile });
      },
    };
  },
};
</script>

<style></style>
