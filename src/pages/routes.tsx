import { createBrowserRouter } from "react-router-dom";
import { DashBoard } from "./app/DashBoard";
import { SignIn } from "./auth/SignIn";
import { AppLayout } from "./_layouts/App";
import { AuthLayout } from "./_layouts/Auth";

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
    ],
  },
]);
