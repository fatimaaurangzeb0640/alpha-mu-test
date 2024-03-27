import { createAction } from "@reduxjs/toolkit";

export const setCodes = createAction<{
  codes: { name: string; img: any }[] | [];
}>("codes/setCodes");
