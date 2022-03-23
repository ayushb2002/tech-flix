import { atom } from "recoil";

export const authAtom = atom({
  default: null,
  key: "authState",
});

export const adminAtom = atom({
  default: false,
  key: "adminState",
});
