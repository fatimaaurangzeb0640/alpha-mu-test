import Image1 from "../assets/1.png";
import Image2 from "../assets/2.png";
import Image3 from "../assets/3.png";
import Image4 from "../assets/4.png";
import Image5 from "../assets/5.png";
import Image6 from "../assets/6.png";
import Timer from "../components/Timer";
import {
  generateRandomNumber,
  getRandomNumberForImage,
} from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCodesState } from "../redux/codes/hooks";

export const Codes = () => {
  const { codes } = useCodesState();
  const icons = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <div className="card-container">
      <div className="header-container">
        <h2>Codes</h2>
        <Link to="/add">
          <button className="icon-button">
            <FontAwesomeIcon icon={faPlus} className="add-icon" />
          </button>
        </Link>
      </div>

      {codes.length > 0
        ? codes.map((code) => {
            return (
              <div className="card">
                <img src={code.img} alt="icon" className="icon" />
                <div className="code-container">
                  <p className="code-name">{code.name}</p>
                  <h3 className="code">{code.codeNo}</h3>
                </div>
                <Timer code={code} />
              </div>
            );
          })
        : "No codes have been added yet."}
    </div>
  );
};
