import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import userApi from "../api/userApi";

export interface User {
  id?: string;
  name?: string;
  email?: string;
  photoUrl?: string;
}

interface UserState {
  current: User | null;
}

const initialState: UserState = {
  current: null,
};

export const getMe = createAsyncThunk<User>("user/getMe", async () => {
  // thunkAPI.dispatch(...)
  const currentUser = await userApi.getMe();
  return currentUser;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMe.fulfilled, (state, action: PayloadAction<User>) => {
      state.current = action.payload;
    });
  },
});

const { reducer: userReducer } = userSlice;
export default userReducer;
