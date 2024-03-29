import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PagesToRead from "./Components/Pages/PagesToRead";
import Root from "./Root/Root";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Pages/Home";
import ListedBooks from "./Components/Pages/ListedBooks";
import BookCard from "./Components/BookCard";
import WhishList from "./Components/WhishList";
import Blog from "./Components/Pages/Blog";
import AboutUs from "./Components/Pages/AboutUs";
import BookDetails from "./Components/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
        loader: () => fetch("books.json"),
        children: [
          {
            index: true,
            element: <BookCard />,
          },
          {
            path: "wishList",
            element: <WhishList />,
          },
        ],
      },
      {
        path: "/pageToRead",
        element: <PagesToRead />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: () => fetch("books.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
