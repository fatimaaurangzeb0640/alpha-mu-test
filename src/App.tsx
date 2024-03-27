import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Add } from "./pages/Add";
import { Codes } from "./pages/Codes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/" element={<Codes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
