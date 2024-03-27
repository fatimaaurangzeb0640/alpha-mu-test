import { createReducer } from "@reduxjs/toolkit";
import { setCodes } from "./action";

export interface CodeState {
  readonly codes: string[] | [];
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
