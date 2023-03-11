import React from "react";
import { createBrowserRouter } from "react-router-dom";


import Joins from "./components/Join";
import Chat from "./components/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element:(<Joins />)
  },
  {
    path: "/chat",
    element:(<Chat />)
  }
])

export default router;
