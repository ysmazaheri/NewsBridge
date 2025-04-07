import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  matchPath,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavigationBar/Navbar";
import FormElementsPage from "./pages/Test/FormElementsPage";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import ResetPassword from "./pages/Authentication/ResetPassword";
import BiasScalePage from "./pages/Test/BiasScalePage";
import Profile from "./pages/Profile/Profile";
import Trending from "./pages/Article/Trending";
import ArticlePage from "./pages/Article/Article";
import Bookmark from "./pages/Article/Bookmark";
import Search from "./pages/Article/Search";
import { UserInteractionProvider } from "./context/UserInteractionContext";
const navbarRoutes = [
  "/",
  "/form-elements-page",
  "/bias-scale-page",
  "/profile",
  "/bookmark",
  "/article/:id",
  "/search",
]; // Add paths here that should have the Navbar

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
          <Route path="/" element={<Trending />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/search" element={<Search />} />
          <Route path="/article/:id" element={<ArticlePage />} />
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
  );

  return showNavbar ? <Navbar /> : null;
}

export default App;
