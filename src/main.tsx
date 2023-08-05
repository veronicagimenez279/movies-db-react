import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Error404 } from "./components/Error404";
import { Layout } from "./components/Layout";

import MovieContextProvider from "./context/MovieContext";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:imdbID",
    element: <Detail />
  },
  {
    path: "*",
    element: <Error404 />
  }

]);

ReactDOM.createRoot(document.getElementById("root")!).render(

  <MovieContextProvider>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </MovieContextProvider>

);