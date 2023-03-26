import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";

//sets up data store, provided by redux
export const SportsStoreDataStore = createStore(ShopReducer);
