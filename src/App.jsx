import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import CardDetails from "./components/Card/CardDetails";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <>
      <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
