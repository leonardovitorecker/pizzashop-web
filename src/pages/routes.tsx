import { createBrowserRouter } from "react-router-dom";
import { DashBoard } from "./app/dashboard/DashBoard";
import { SignIn } from "./auth/SignIn";
import { AppLayout } from "./_layouts/App";
import { AuthLayout } from "./_layouts/Auth";
import { SignUp } from "./auth/SignUp";
import { Orders } from "./app/orders/Orders";
import { NotFound } from "./404";
import { Error } from "./Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/orders",
        element: <Orders />,
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
  {
    path: "*",
    element: <NotFound />,
  },
]);
