import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  matchPath,
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
import BookmarkedPage from "./pages/BookmarkedPage";
import Search from "./pages/Search";
import { UserInteractionProvider } from "./context/UserInteractionContext";
const navbarRoutes = ["/", "/form-elements-page", "/bias-scale-page", "/profile", "/bookmark", "/article/:id", "/search"]; // Add paths here that should have the Navbar

function App() {
  return (
    <Router>
      <UserInteractionProvider>
      <ConditionalNavbar />
      <Routes>
        <Route path="/form-elements-page" element={<FormElementsPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/bias-scale-page" element={<BiasScalePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/bookmark" element={<BookmarkedPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/article/:id" element={
          <ArticlePage
          
          />
        } />
        {/* Add more routes here as needed */}
      </Routes>
      </UserInteractionProvider>
    </Router>
  );
}

function ConditionalNavbar() {
  const location = useLocation();
  const showNavbar = navbarRoutes.some((route) =>
    matchPath(route, location.pathname)
  )

  return showNavbar ? <Navbar /> : null;
}

export default App;
