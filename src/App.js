import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Article from "./pages/Article.js";
import ArtilclesList from "./pages/ArticlesList.js";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/article/:name" Component={Article} />
          <Route path="/articles-list" Component={ArtilclesList} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
