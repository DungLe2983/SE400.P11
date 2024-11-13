import { atom, selector } from "recoil";

const userState = atom({
  key: "userState",
  default: {
    name: "newUser",
    password: "newUser",
  },
});

const cartItemsQuantityState = atom({
  key: "cartItemsQuantityState",
  default: 1,
});

export { userState, cartItemsQuantityState };
