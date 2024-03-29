import React from "react";
import Browse from "./Browse";
import Login from "./Login";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../Utils/appStore";
import WatchTrailer from "./WatchTrailer";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/watch/:movieName",
    element: <WatchTrailer />,
  },
]);

const Body = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRoute} />
      </Provider>
    </div>
  );
};

export default Body;
