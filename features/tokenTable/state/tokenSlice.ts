import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "@/types/token";
interface TokenState { tokens: Token[]; sortKey: string; }
const initialState: TokenState = { tokens: [], sortKey: "price" };
const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setTokens: (s, a: PayloadAction<Token[]>) => { s.tokens = a.payload; },
    setSortKey: (s, a: PayloadAction<string>) => { s.sortKey = a.payload; }
  }
});
export const { setTokens, setSortKey } = tokenSlice.actions;
export default tokenSlice.reducer;