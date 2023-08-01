import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import MovieContextProvider from "./context/MovieContext";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NotFound } from "./components/Error404";
import { Layout } from "./components/Layout";

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
    element: <NotFound />
  }

]);

ReactDOM.createRoot(document.getElementById("root")!).render(

  <MovieContextProvider>
    <Layout><RouterProvider router={router} /></Layout>
  </MovieContextProvider>

);