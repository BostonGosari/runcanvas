import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import ListPage from "./routes/ListPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/list" element={<ListPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
