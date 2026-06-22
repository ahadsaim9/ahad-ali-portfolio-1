import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import ErrorPage from "../ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <About></About>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/resume",
        element: <Resume></Resume>,
      },
      // {
      //   path: "/contact",
      //   element: <Contact></Contact>,
      // },
    ],
  },
]);

export default router;
