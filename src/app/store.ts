import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "../features/Photo/PhotoSlice";
import userReducer from "./userSlice";

export type RootState = ReturnType<typeof store.getState>;
const rootReducer = {
  photos: photoReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
