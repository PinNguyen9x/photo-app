import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import photoReducer from "../features/Photo/photoSlice";

export type RootState = ReturnType<typeof store.getState>;
const rootReducer = {
  photos: photoReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
