import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import userReducer from "./userSlice";

// Define persist configuration
const persistConfig = {
  key: "root", // Key for the persist storage
  storage,     // Storage engine (localStorage or other engines)
};

// Wrap your reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, userReducer);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
});

export const persistor = persistStore(store);
export default store;
