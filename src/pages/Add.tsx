import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setCodes } from "../redux/codes/action";
import { useCodesState } from "../redux/codes/hooks";
import { useNavigate } from "react-router-dom";

export const Add = () => {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();
  const { codes } = useCodesState();
  const navigate = useNavigate();

  return (
    <div className="card-container">
      <h2>Add a new code</h2>
      <input
        type="text"
        placeholder="Enter code here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        disabled={!input}
        onClick={() => {
          let tempCodes = [...codes];
          tempCodes.push(input);
          dispatch(setCodes({ codes: tempCodes }));
          navigate("/");
        }}
      >
        Add
      </button>
    </div>
  );
};
