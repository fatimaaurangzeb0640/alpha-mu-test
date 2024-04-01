import { generateRandomNumber } from "../../utils";
import { useAppDispatch, useAppSelector } from "../hooks";
import { AppState } from "../store";
import { setCodes } from "./action";
import { CodeType } from "./reducer";

export const useCodesState = (): AppState["codes"] => {
  return useAppSelector<AppState["codes"]>((state) => state.codes);
};
