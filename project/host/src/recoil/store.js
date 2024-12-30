import { atom, selector } from "recoil";

const userState = atom({
  key: "userState",
  default: {
    token: localStorage.getItem("shosingToken") || "",
  },
});

const cartItemsQuantityState = atom({
  key: "cartItemsQuantityState",
  default: 1,
});

export { userState, cartItemsQuantityState };
