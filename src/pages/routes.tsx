import { createBrowserRouter } from "react-router-dom";
import { DashBoard } from "./app/DashBoard";
import { SignIn } from "./auth/SignIn";
import { AppLayout } from "./_layouts/App";
import { AuthLayout } from "./_layouts/Auth";
import { SignUp } from "./auth/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
