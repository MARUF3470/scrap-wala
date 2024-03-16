import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";

import Main from "../layout/Main";
import ErrorPage from "../pages/shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
