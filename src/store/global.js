import create from "zustand";
import { persist } from "zustand/middleware";
import jwt_decode from "jwt-decode";

const useGlobal = create(
  persist((set, get) => ({
    session: null,
    googleMail: null,
    setSession: (value) => {
      //if value is null dont decode
      if (value) {
        const decoded = jwt_decode(value);
        set({ session: decoded });
      } else {
        set({ session: value });
      }
    },
    setGoogleMail: (value) => {
      set({ googleMail: value });
    },
  }))
);

export default useGlobal;
