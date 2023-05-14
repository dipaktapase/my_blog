import Home from "./pages/Home.js";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" Component={Home} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
