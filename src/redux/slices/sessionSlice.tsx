import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit';

export interface SessionState {
  user: User | null;
}

const initialState: SessionState = {
  user: null,
};

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
      getUser: () => state ,
      setUser: (state, action: PayloadAction<User | null>) => {
        state.user = action.payload;
      }
    },
  });

  
  export const { getUser, setUser } = sessionSlice.actions;
  export default sessionSlice.reducer;  