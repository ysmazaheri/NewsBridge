import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import FormElementsPage from "./pages/component_testing_pages/FormElementsPage";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/FormElementsPage" element={<FormElementsPage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;