import { createReducer } from "@reduxjs/toolkit";
import { setCodes } from "./action";

export type CodeType = {
  name: string;
  codeNo: number;
  img: any;
  time: number;
};

export interface CodeState {
  codes: CodeType[] | [];
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
