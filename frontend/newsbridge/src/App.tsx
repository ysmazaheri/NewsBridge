import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import FormElementsPage from "./pages/component_testing_pages/FormElementsPage";

const navbarRoutes = ["/", "/FormElementsPage"]; // Add paths here that should have the Navbar

function App() {
  return (
    <Router>
      <ConditionalNavbar />
      <Routes>
        <Route path="/FormElementsPage" element={<FormElementsPage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

function ConditionalNavbar() {
  const location = useLocation();
  const showNavbar = navbarRoutes.includes(location.pathname);

  return showNavbar ? <Navbar /> : null;
}

export default App;