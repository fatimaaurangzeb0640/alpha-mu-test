import { createAction } from "@reduxjs/toolkit";
import { CodeType } from "./reducer";

export const setCodes = createAction<{
  codes: CodeType[] | [];
}>("codes/setCodes");
