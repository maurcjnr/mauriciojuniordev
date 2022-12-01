//Imported
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Imported Pages
import Home from "./Pages/Home";
import RPG from "./Pages/RPG/RPG";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RPG" element={<RPG />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
