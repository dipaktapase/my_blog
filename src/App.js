import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Article from "./pages/Article.js";
import ArtilclesList from "./pages/ArticlesList.js";


function App() {
  return (
    <div className="max-w-screen-md mx-auto pt-20">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/artilce" Component={Article} />
          <Route path="/articles-list" Component={ArtilclesList} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
