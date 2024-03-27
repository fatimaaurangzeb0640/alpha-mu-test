import { useAppSelector } from "../hooks";
import { AppState } from "../store";

export const useCodesState = (): AppState["codes"] => {
  return useAppSelector<AppState["codes"]>((state) => state.codes);
};
