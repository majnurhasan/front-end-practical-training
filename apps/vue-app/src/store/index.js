// import Vue from "vue";
// import Vuex from "vuex";
// store/index.js import {createStore} from 'vuex' export default createStore()

// Vue.use(Vuex);

// const store = new Vuex.Store({
//   state: { cartItems: [] },
//   mutations: {
//     addToCart(state, payload) {
//       state.cartItems.push(payload);
//     },
//   },
// });

// export default store;

// store/index.js
import { createStore } from "vuex";

export default createStore({
  state: { cartItems: [] },
  mutations: {
    // calculate(state) {
    //     const updatedItems = state.cartItems.map(item)
    // },
    pushToCart(state, payload) {
      // put add quantity here
      const existingItem = state.cartItems.filter(
        (item) => item.id === payload.id
      );

      // console.log(existingItem);

      if (existingItem.length > 0) {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id === payload.id
        );
        const updatedItems = [...state.cartItems];
        // console.log(itemIndex);
        updatedItems[itemIndex].quantity += 1;
        state.cartItems = updatedItems;
      } else {
        state.cartItems.push({ ...payload, quantity: 1 });
      }

      // console.log(state.cartItems);
    },
    removeFromCart(state, payload) {
      // minus quantity
      const existingItem = state.cartItems.find((item) => item.id === payload);

      if (existingItem.quantity > 1) {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id === payload
        );
        const updatedItems = [...state.cartItems];
        // console.log(itemIndex);
        updatedItems[itemIndex].quantity -= 1;
        state.cartItems = updatedItems;
      } else {
        const updatedCart = state.cartItems.filter(
          (item) => item.id !== payload
        );
        state.cartItems = updatedCart;
      }
    },
  },
  actions: {
    addToCart(context, payload) {
      context.commit("pushToCart", payload);
    },
    deleteFromCart(context, payload) {
      context.commit("removeFromCart", payload);
    },
  },
});
