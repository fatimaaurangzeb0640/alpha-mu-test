import { createAction } from "@reduxjs/toolkit";

export const setCodes = createAction<{
  codes: string[] | [];
}>("codes/setCodes");
