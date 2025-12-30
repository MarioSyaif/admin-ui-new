import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import BalancePage from "./pages/Balance";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <SignInPage />,
  },
  {
    path: "/register",
    element: <SignUpPage />,
  },
  {
    path: "/balance",
    element: <BalancePage />,
  },
]);

export default router;
