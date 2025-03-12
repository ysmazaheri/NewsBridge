import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import FormElementsPage from "./pages/component_testing_pages/FormElementsPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ResetPassword from "./components/ResetPassword";

const navbarRoutes = ["/", "/form-elements-page"]; // Add paths here that should have the Navbar

function App() {
  return (
    <Router>
      <ConditionalNavbar />
      <Routes>
        <Route path="/form-elements-page" element={<FormElementsPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
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