import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavigationBar/Navbar";
import FormElementsPage from "./pages/component_testing_pages/FormElementsPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import BiasScalePage from "./pages/component_testing_pages/BiasScalePage";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import ArticlePage from "./pages/Article";

import { mockArticle } from "./mock-data/MockArticle";
import { mockComments } from "./mock-data/MockComments";
import { mockSourceArticles } from "./mock-data/MockSourceArticles";

const navbarRoutes = ["/", "/form-elements-page", "/bias-scale-page", "/home", "/article", "/article"]; // Add paths here that should have the Navbar

function App() {
  return (
    <Router>
      <ConditionalNavbar />
      <Routes>
        <Route path="/form-elements-page" element={<FormElementsPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/bias-scale-page" element={<BiasScalePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/article" element={
          <ArticlePage
            article={mockArticle}
            comments={mockComments}
            sourceArticles={mockSourceArticles}
          />
        } />
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
