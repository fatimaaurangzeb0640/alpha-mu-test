import { createReducer } from "@reduxjs/toolkit";
import { setCodes } from "./action";

export interface CodeState {
  readonly codes: { name: string; img: any }[] | [];
}

export const initialState: CodeState = {
  codes: [],
};

export default createReducer(initialState, (builder) =>
  builder.addCase(setCodes, (state, { payload: { codes } }) => {
    return {
      ...state,
      codes,
    };
  })
);
